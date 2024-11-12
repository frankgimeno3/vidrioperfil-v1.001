"use client"
import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { handleSignUp } from "@/actions/cognitoActions/cognitoActions";
import Link from "next/link";
import { Superbutton } from "@/app/ui-components/auth/Superbutton";
import Logo from "@/app/ui-components/logo/Logo";

export default function SignUpForm() {
  const [errorMessage, dispatch] = useFormState(handleSignUp, undefined);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(false);

  const videoUrl = 'https://vidrioperfil-main-bucket.s3.eu-west-3.amazonaws.com/general/videos/perfiles.mp4';

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setPasswordsMatch(e.target.value === confirmPassword);
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
    setPasswordsMatch(password === e.target.value);
  };

  const redirect = (destination: string) => {
    if (destination === 'home') {
      window.location.href = '/';
    }
  };

  return (
    <div className="relative">
      <video
        className="fixed top-0 left-0 object-cover h-screen w-screen bg-black opacity-90 overflow-hidden"
        src={videoUrl}
        autoPlay
        loop
        muted
      ></video>
      <form action={dispatch} className="relative text-white mx-auto h-full" style={{ width: '700px' }}>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-8 h-screen bg-zinc-900 bg-opacity-50">
          <div className="mx-auto" onClick={() => redirect('home')}>
            <Logo />
          </div>
          <h1 className="my-3 text-2xl text-center">
            Crear una cuenta
          </h1>
          <div className="w-full mx-auto" style={{ width: '500px' }}>
            <div className="mt-4">
              <label className="mt-10 text-center text-sm leading-9 tracking-tight text-white" htmlFor="email">
                Email
              </label>
              <div className="relative">
                <input
                  className="peer block w-full  rounded-md border border-gray-200 py-[9px] pl-3 text-sm outline-2 placeholder:text-gray-500 text-gray-600"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Introduzca un correo electrónico"
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="mt-10 text-center text-sm leading-9 tracking-tight text-white" htmlFor="password">
                Contraseña
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-3 text-sm outline-2 placeholder:text-gray-500 text-gray-600"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Introduzca una contraseña de 6 o más caracteres"
                  required
                  minLength={6}
                  onChange={handlePasswordChange}
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="mt-10 text-center text-sm leading-9 tracking-tight text-white" htmlFor="confirmPassword">
                Repita la contraseña
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-3 text-sm outline-2 placeholder:text-gray-500 text-gray-600"
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  placeholder="Repita la contraseña"
                  required
                  onChange={handleConfirmPasswordChange}
                />
              </div>
            </div>
            {!passwordsMatch && (
              <p className="text-sm text-red-500 mt-2">Las contraseñas no coinciden.</p>
            )}
          </div>
          <div className="mx-auto my-5">
            <SignUpButton disabled={!passwordsMatch || password.length < 6} />
          </div>
          <div className="mx-auto justify-center" style={{ width: '500px' }}>
            <div className="flex justify-center">
              <Link href="/auth/login" className="mt-3 cursor-pointer text-blue-300 hover:text-white">
                Ya tiene una cuenta? Inicie sesión.
              </Link>
            </div>
            <div className="flex h-8 items-end space-x-1">
              <div className="flex h-8 items-end space-x-1" aria-live="polite" aria-atomic="true">
                {errorMessage && (
                  <>
                    <p className="text-sm text-red-500">{errorMessage}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

function SignUpButton({ disabled }: { disabled: boolean }) {
  const { pending } = useFormStatus();

  return (
    <Superbutton className="mt-4 w-full" aria-disabled={pending || disabled} disabled={disabled}>
      Crear una cuenta
    </Superbutton>
  );
}
