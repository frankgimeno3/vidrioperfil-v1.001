import { redirect } from "next/navigation";
import { signUp, confirmSignUp, resendSignUpCode, autoSignIn } from "aws-amplify/auth";
import { getErrorMessage } from "@/utils/get-error-message";

export async function handleSignUp(formData: FormData) {
  try {
    const { isSignUpComplete, nextStep } = await signUp({
      username: String(formData.get("email")),
      password: String(formData.get("password")),
      options: {
        userAttributes: {
          email: String(formData.get("email")),
          name: String(formData.get("name")),
        },
        autoSignIn: true,
      },
    });
    redirect("/auth/confirm-signup");
  } catch (error) {
    return getErrorMessage(error);
  }
}

export async function handleConfirmSignUp(formData: FormData) {
  try {
    await confirmSignUp({
      username: String(formData.get("email")),
      confirmationCode: String(formData.get("code")),
    });
    await autoSignIn();
    redirect("/auth/login");
  } catch (error) {
    return getErrorMessage(error);
  }
}

export async function handleSendEmailVerificationCode(formData: FormData) {
  try {
    await resendSignUpCode({ username: String(formData.get("email")) });
    return { message: "Code sent successfully" };
  } catch (error) {
    return { errorMessage: getErrorMessage(error) };
  }
}
