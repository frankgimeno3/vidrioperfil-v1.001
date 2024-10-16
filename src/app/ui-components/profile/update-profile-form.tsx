"use client";
 import { useFormState, useFormStatus } from "react-dom";
 import useAuthUser from "@/app/hooks/use-auth-user";
import { Superbutton } from "../auth/Superbutton";
import { handleUpdateUserAttribute } from "@/actions/cognitoActions";
 
export default function UpdateProfileForm() {
  const user = useAuthUser();
  const [status, dispatch] = useFormState(handleUpdateUserAttribute, "");

  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Name
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="name"
                type="text"
                name="name"
                minLength={4}
                placeholder="Enter your name"
                required
                defaultValue={user?.name}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
             </div>
            <div>
              <input
                id="current_name"
                type="hidden"
                name="current_name"
                defaultValue={user?.name}
              />
            </div>
          </div>
        </div>
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {status === "error" && (
            <>
               <p className="text-sm text-red-500">
                There was an error updating name.
              </p>
            </>
          )}
          {status === "success" && (
            <p className="text-sm text-green-500">
              Name has been updated successfully.
            </p>
          )}
        </div>
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <UpdateButton />
      </div>
    </form>
  );
}

function UpdateButton() {
  const { pending } = useFormStatus();

  return <Superbutton aria-disabled={pending}>Update Name</Superbutton>;
}