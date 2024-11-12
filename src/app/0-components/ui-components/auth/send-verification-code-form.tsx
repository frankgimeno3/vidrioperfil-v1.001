"use client";

 

 import { useFormState, useFormStatus } from "react-dom";
import { Superbutton } from "./Superbutton";
import { handleSendEmailVerificationCode } from "@/actions/cognitoActions/cognitoActions";
  
export default function SendVerificationCode() {
  const [response, dispatch] = useFormState(handleSendEmailVerificationCode, {
    message: "",
    errorMessage: "",
  });
  const { pending } = useFormStatus();
  return (
    <>
      <Superbutton
        className="mt-4 w-full"
        aria-disabled={pending}
        formAction={dispatch}
      >
        Volver a enviar código de verificación{" "}
       </Superbutton>
      <div className="flex h-8 items-end space-x-1">
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {response?.errorMessage && (
            <>
               <p className="text-sm text-red-500">{response.errorMessage}</p>
            </>
          )}
          {response?.message && (
            <p className="text-sm text-green-500">{response.message}</p>
          )}
        </div>
      </div>
    </>
  );
}