"use client";
 
import { useFormState, useFormStatus } from "react-dom";
import { handleResetPassword } from "@/actions/cognitoActions";
import { Superbutton } from "@/app/ui-components/auth/Superbutton";
 
export default function SubmitResetPasswordFrom() {
  const [errorMessage, dispatch] = useFormState(handleResetPassword, undefined);
  return (
    <form action={dispatch} className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={` mb-3 text-2xl`}>
          Please enter your email to get confirmation code.
        </h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
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
                placeholder="Enter your email address"
                required
              />
             </div>
          </div>
        </div>
        <SendConfirmationCodeButton />
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
  );
}

function SendConfirmationCodeButton() {
  const { pending } = useFormStatus();

  return (
    <Superbutton className="mt-4 w-full" aria-disabled={pending}>
      Send Code  
    </Superbutton>
  );
}