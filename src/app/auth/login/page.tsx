"use client";

import { useFormState, useFormStatus } from "react-dom";
 import Link from "next/link";
import { handleSignIn } from "@/actions/cognitoActions/authHandlers/signIn";
import { Superbutton } from "@/app/0-components/ui-components/auth/Superbutton";
import Logo from "@/app/0-components/ui-components/logo/Logo";
 

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(handleSignIn, undefined);
  const videoUrl = 'https://vidrioperfil-main-bucket.s3.eu-west-3.amazonaws.com/general/videos/perfiles.mp4'

  const redirect = (destination:string) => {
    if (destination=='home'){    window.location.href = '/es/';}
};
 
  return (
    <div className='relative'>
      <video
        className="fixed top-0 left-0 object-cover h-screen w-screen bg-black opacity-90 overflow-hidden"
        src={videoUrl}
        autoPlay
        loop
        muted
      ></video>
      <form action={dispatch} className="relative text-white mx-auto h-full " style={{ width: '700px' }}>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-8   h-screen   bg-zinc-900 bg-opacity-50" >
          <div className="mx-auto " onClick={() => redirect('home')}  >
            <Logo />
          </div>
          <h1 className=' my-3  text-2xl text-center'>
            Iniciar Sesión
          </h1>
          <div className="w-full mx-auto"  style={{ width: '500px' }}>
            <div>
              <label
                className="mb-3 mt-5 block text-xs font-medium text-white"
                htmlFor="email"
              >
                Email
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-3 text-sm outline-2 placeholder:text-gray-500 text-gray-600"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Introduzca su correo electrónico"
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                className="mb-3 mt-5 block text-xs font-medium text-white"
                htmlFor="password"
              >
                Contraseña
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-3 text-sm outline-2 placeholder:text-gray-500 text-gray-600"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Introduzca su contraseña"
                  required
                  minLength={6}
                />
              </div>
            </div>
          </div>
          <div className="mx-auto my-5">
          <LoginButton />
          </div>
          <div className="flex justify-center">
            <Link
              href="/auth/reset-password/submit"
              className="mt-2 cursor-pointer text-blue-300 hover:text-white"
            >
              Olvidó su contraseña? Haga click aquí.
            </Link>
          </div>
          <div className="flex justify-center">
            <Link
              href="/auth/signup"
              className="mt-2 cursor-pointer text-blue-300 hover:text-white"
            >
              {"No dispone de una cuenta? "} Crear una cuenta.
            </Link>
          </div>
          <div className="flex h-8 items-end space-x-1">
            <div
              className="flex h-8 items-end space-x-1"
              aria-live="polite"
              aria-atomic="true"
            >
              {errorMessage && (
                <>
                  <p className="text-sm text-red-500">{errorMessage}</p>
                </>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>

  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Superbutton className="mt-4 text-center" style={{width:'115px'}} aria-disabled={pending}>
      Iniciar sesión
    </Superbutton>
  );
}