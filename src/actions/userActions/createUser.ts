"use server";

import { ddbDocClient } from "@/utils/dbconfig";
import { PutCommand } from "@aws-sdk/lib-dynamodb";

// Estructura de los datos del usuario a agregar
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

// Función para agregar un usuario a DynamoDB
export const addUser = async (user: UserStructure) => {
  try {
    const params = {
      TableName: "vidrioperfil-main-table",  
      Item: {
        userId: user.userId,
        AWSDataType: user.AWSDataType,
        userEmail: user.userEmail,
        isModerator: user.isModerator,
        personalAccountId: user.personalAccountId,
        managedAccounts: user.managedAccounts.map((account) => ({
          companyAccountId: account.companyAccountId,
          rolesArray: account.rolesArray,
        })),
      },
    };
    await ddbDocClient.send(new PutCommand(params));
    console.log("User added successfully");
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Database Error: Failed to add user.");
  }
};
