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

export interface personalAccount{
  personalAccountId:string;
  userId:string;
  userName:string;
  userImage:string;
  userSurnames:string;
  userCountry:string;
  userContactEmail:string;
  userContactPhone:string;
  userLinkedinLink:string;
  userWebsiteLink:string;
  userMainDescription:string;
  followedUsersIdArray:string[];
  followedCompaniesIdArray:string[]
  userPublicationsIdArray:string[];
  userConversationsIdArray:string[];
}

export interface companyAccount{
  companyAccountId:string;
  companyUserDataArray:companyUserDataElement[];
  businessName:string;
  TIN:string;
  numberOfEmployees:string;
  legalName:string;
  companyAddress:string;
  companyHeadquartersCountry:string;
  companyCountriesArray:string[];
  companyContactPhone:string;
  companyLinkedinLink:string;
  companyWebsiteLink:string;
  companyMainDescription:string;
  companyFollowedUsersIdArray:string[];
  companyFollowedCompaniesIdArray:string[]
  companyPublicationsIdArray:string[];
  companyConversationsIdArray:string[];
}

export interface companyUserDataElement{
  userId:string;
  userRolesArray:string[];
}