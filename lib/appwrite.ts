import { Client } from "react-native-appwrite";

export const Config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.arj.aora",
  projectId: "66478dae0024ec44301a",
  databaseId: "66478f540010db4073dd",
  userCollectionId: "66478f8a002788ef3c82",
  videoCollectionId: "66478fb7003944d9ed50",
  storageId: "66487f850014f4268cde",
};

const client = new Client();

client
  .setEndpoint(Config.endpoint)
  .setProject(Config.projectId)
  .setPlatform(Config.platform);
