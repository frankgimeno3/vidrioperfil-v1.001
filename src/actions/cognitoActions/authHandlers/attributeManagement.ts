import { updateUserAttribute, confirmUserAttribute } from "aws-amplify/auth";
import { handleUpdateUserAttributeNextSteps } from "../../cognitoActions/utils/handleUpdateUserAttributeNextSteps";
import { getErrorMessage } from "@/utils/get-error-message";

export async function handleUpdateUserAttribute(formData: FormData) {
  const attributeKey = formData.get("email") ? "email" : "name";
  const attributeValue = formData.get(attributeKey);
  const currentAttributeValue = formData.get(`current_${attributeKey}`);

  if (attributeValue === currentAttributeValue) return "";

  try {
    const output = await updateUserAttribute({
      userAttribute: { attributeKey: String(attributeKey), value: String(attributeValue) },
    });
    return handleUpdateUserAttributeNextSteps(output);
  } catch (error) {
    console.log(error);
    return "error";
  }
}

export async function handleConfirmUserAttribute(formData: FormData) {
  const code = formData.get("code");
  if (!code) return;

  try {
    await confirmUserAttribute({ userAttributeKey: "email", confirmationCode: String(code) });
    return "success";
  } catch (error) {
    console.log(error);
    return "error";
  }
}
