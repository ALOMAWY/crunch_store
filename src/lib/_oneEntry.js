import getNewToken from "@/_serverActions/getNewToken";
import setNewToken from "@/_serverActions/setNewToken";
import { defineOneEntry } from "oneentry";

let api = null;

async function initApi() {
  if (!api) {
    let newToken = await getNewToken();

    api = defineOneEntry(process.env.API_KEY, {
      token: process.env.API_TOKEN,
      langCode: "en_US",
      auth: {
        customAuth: true,
        refreshToken: newToken,
        saveFunction: async (token) => {
          await setNewToken(token);
        },
      },
    });
  }

  return api;
}

export async function getApi() {
  if (!api) {
    await initApi();
  }

  return api;
}
