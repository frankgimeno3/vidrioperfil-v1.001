import { redirect } from "next/navigation";
import { signIn, resendSignUpCode } from "aws-amplify/auth";
import { getErrorMessage } from "@/utils/get-error-message";

export async function handleSignIn(formData: FormData) {
  let redirectLink = "/es/";
  try {
    const { nextStep } = await signIn({
      username: String(formData.get("email")),
      password: String(formData.get("password")),
    });
    if (nextStep?.signInStep === "CONFIRM_SIGN_UP") {
      await resendSignUpCode({ username: String(formData.get("email")) });
      redirectLink = "/auth/confirm-signup";
    }
    redirect(redirectLink);
  } catch (error) {
    return getErrorMessage(error);
  }
}
