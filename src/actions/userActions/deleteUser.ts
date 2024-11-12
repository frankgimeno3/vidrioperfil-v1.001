"use server";

import { ddbDocClient } from "@/utils/dbconfig";
import { DeleteCommand } from "@aws-sdk/lib-dynamodb";

// Estructura de los datos del usuario a eliminar
export interface UserStructure {
  userId: string;
  AWSDataType: string;
  userEmail: string;
  isModerator: boolean;
  personalAccountId: string;
  managedAccounts: ManagedAccountsElement[];
}

export interface ManagedAccountsElement {
  companyAccountId: string;
  rolesArray: string[];
}

// Función para eliminar un usuario de DynamoDB
export const deleteUser = async (userId: string) => {
  try {
    const params = {
      TableName: "vidrioperfil-main-table", // Asegúrate de que el nombre de la tabla sea el correcto
      Key: {
        userId: userId,
      },
    };
    await ddbDocClient.send(new DeleteCommand(params));
    console.log("User deleted successfully");
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Database Error: Failed to delete user.");
  }
};
