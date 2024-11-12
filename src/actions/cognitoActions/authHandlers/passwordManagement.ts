import { redirect } from "next/navigation";
import { updatePassword, resetPassword, confirmResetPassword } from "aws-amplify/auth";
import { getErrorMessage } from "@/utils/get-error-message";

export async function handleUpdatePassword(formData: FormData) {
  const currentPassword = formData.get("current_password");
  const newPassword = formData.get("new_password");

  if (currentPassword === newPassword) return;

  try {
    await updatePassword({
      oldPassword: String(currentPassword),
      newPassword: String(newPassword),
    });
    return "success";
  } catch (error) {
    console.log(error);
    return "error";
  }
}

export async function handleResetPassword(formData: FormData) {
  try {
    await resetPassword({ username: String(formData.get("email")) });
    redirect("/auth/reset-password/confirm");
  } catch (error) {
    return getErrorMessage(error);
  }
}

export async function handleConfirmResetPassword(formData: FormData) {
  try {
    await confirmResetPassword({
      username: String(formData.get("email")),
      confirmationCode: String(formData.get("code")),
      newPassword: String(formData.get("password")),
    });
    redirect("/auth/login");
  } catch (error) {
    return getErrorMessage(error);
  }
}
