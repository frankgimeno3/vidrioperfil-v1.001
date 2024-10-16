"use client";
 
import { useFormState, useFormStatus } from "react-dom";
import { handleResetPassword } from "@/actions/cognitoActions";
import { Superbutton } from "@/app/ui-components/auth/Superbutton";
import Logo from "@/app/ui-components/logo/Logo";
 
export default function SubmitResetPasswordFrom() {
  const [errorMessage, dispatch] = useFormState(handleResetPassword, undefined);
  const videoUrl = 'https://vidrioperfil-main-bucket.s3.eu-west-3.amazonaws.com/general/videos/perfiles.mp4'

  const redirect = (destination:string) => {
    if (destination=='home'){    window.location.href = '/';}
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
      <div className="flex min-h-full flex-1 flex-col justify-center px-6     h-screen   bg-zinc-900 bg-opacity-50" >
      <div className="mx-auto " onClick={() => redirect('home')} >
            <Logo />
          </div>        
          <h1 className=' my-3 mx-auto  text-2xl text-center' style={{ width: '500px' }}>
          Introduzca su correo electrónico para recibir un código de confirmación
        </h1>
        <div className="w-full mx-auto" style={{ width: '500px' }}> 
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-white"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Introduzca su correo electrónico"
                required
              />
             </div>
          </div>
        </div>
        <div className="mx-auto my-5">
        <SendConfirmationCodeButton />
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

function SendConfirmationCodeButton() {
  const { pending } = useFormStatus();

  return (
    <Superbutton className="mt-4 w-full" aria-disabled={pending}>
      Enviar código 
    </Superbutton>
  );
}