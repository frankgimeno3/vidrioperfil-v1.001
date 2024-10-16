import type { Metadata } from "next";
import "./globals.css";
import FixedNav from "./ui-components/navs/web/FixedNav";
import TopNav from "./ui-components/navs/web/TopNav";


export const metadata: Metadata = {
  title: "VIDRIOPERFIL.COM",
  description: "El portal del vidrio y la carpintería",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>

        {children}
      </body>
    </html>
  );
}
