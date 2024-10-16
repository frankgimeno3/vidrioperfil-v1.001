import type { Metadata } from "next";
import "./globals.css"; 
import ConfigureAmplifyClientSide from "./amplify-cognito-config";

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
      <ConfigureAmplifyClientSide />
        {children}
      </body>
    </html>
  );
}
