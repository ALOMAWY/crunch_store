"use server";

import { getApi } from "@/lib/_oneEntry";

async function signUpAction(formData) {
  const api = await getApi();
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const data = {
      formIdentifier: "sign-up-form",
      authData: [
        { marker: "name", value: name },
        { marker: "email", value: email },
        { marker: "password", value: password },
      ],
      formData: [
        { marker: "name", value: name, type: "string" },
        { marker: "email", value: email, type: "string" },
        { marker: "password", value: password, type: "string" },
      ],
    };

    const sendFormData = await api.AuthProvider.signUp("sign-up", data);

    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: true, error: "Sign_Up Failed, Please Try Again. " };
  }
}

export default signUpAction;
