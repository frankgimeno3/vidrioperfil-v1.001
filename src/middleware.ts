import { type NextRequest, NextResponse } from "next/server";
import { authenticatedUser } from "./utils/amplify-server-utils";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const user = await authenticatedUser({ request, response });

  const path = request.nextUrl.pathname;

  // Detectamos si estamos en uno de los portales principales (/es, /al, /pt) o sus subrutas
  const isOnMainRoute = /^\/(es|al|pt)(\/(arquitectura|directorio|eventos|red|revistas|search|wiki))?$/.test(path);
  
  // Detectamos si estamos en una de las rutas "l" (equivalente a logged) y sus subrutas dentro de un portal
  const isOnLoggedRoute = /^\/(es|al|pt)\/l(\/(arquitectura|directorio|eventos|red|revistas|search|wiki))?$/.test(path);

  // Detectamos si estamos en la ruta de administración
  const isOnAdminArea = path.startsWith("/admin");

  // Detectamos si estamos en la ruta de autenticación
  const isOnAuthRoute = path.startsWith("/auth");

  // Si estamos en una subruta de "l" (logged) y el usuario no está autenticado
  if (isOnLoggedRoute && !user) {
    const [_, portal, , subRoute] = path.split("/"); // Extraemos el portal y la subruta (si existe)
    const redirectTo = subRoute ? `/${portal}/${subRoute}` : `/${portal}`;
    return NextResponse.redirect(new URL(redirectTo, request.nextUrl)); // Redirigimos a la ruta madre correspondiente
  }

  // Si estamos en una subruta principal fuera de "l" y el usuario está autenticado
  if (isOnMainRoute && user) {
    const [_, portal, subRoute] = path.split("/"); // Extraemos el portal y la subruta (si existe)
    const redirectTo = subRoute ? `/${portal}/l/${subRoute}` : `/${portal}/l`;
    return NextResponse.redirect(new URL(redirectTo, request.nextUrl)); // Redirigimos a la misma subruta pero dentro de "l"
  }

  // Si estamos en la ruta de autenticación y el usuario está autenticado
  if (isOnAuthRoute && user) {
    return NextResponse.redirect(new URL("/es/l/", request.nextUrl)); // Redirigir al dashboard (main page como loggeado) por defecto si está autenticado
  }

  // Si estamos en la ruta de administración y el usuario no es admin
  if (isOnAdminArea && (!user || !user.isAdmin)) {
    return NextResponse.redirect(new URL("/es/l", request.nextUrl)); // Redirigir al dashboard (main page como loggeado) si no es admin
  }

  return response; // Continuar con la solicitud si ninguna de las condiciones anteriores se cumple
}

export const config = {
  matcher: [
    /*
     * Interceptar todas las rutas excepto las de API y estáticas
     */
    "/((?!api|_next/static|_next/image|.*\\.png$).*)",
  ],
};
