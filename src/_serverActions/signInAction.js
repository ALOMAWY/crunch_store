"use server";

import { getApi } from "@/lib/_oneEntry";
import { cookies } from "next/headers";

async function signInAction(formData) {
  const api = await getApi();
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const data = {
      authData: [
        { marker: "email", value: email },
        { marker: "password", value: password },
      ],
    };

    const userAuth = await api.AuthProvider.auth("sign-up", data);

    const cookiesStore = await cookies()

    cookiesStore.set("user_token", userAuth.accessToken, { maxAge: 60 * 60 * 24 });
    cookiesStore.set("new-token", userAuth.refreshToken, { maxAge: 60 * 60 * 24 *3});
    cookiesStore.set("user_info", userAuth.userIdentifier, {
      maxAge: 60 * 60 * 24 * 3,
    });

    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: true ,error:"Sign_In Failed, Please Try Again. "};
  }
}

export default signInAction;
