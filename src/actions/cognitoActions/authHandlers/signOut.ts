import { signOut } from "aws-amplify/auth";
import { getErrorMessage } from "@/utils/get-error-message";

export async function handleSignOut() {
  try {
    await signOut();
    return true;
  } catch (error) {
    console.log(getErrorMessage(error));
    return false;
  }
}
