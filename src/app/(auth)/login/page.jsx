
import SignInFormClient from "@/components/SignInFormClient";

import { getApi } from "@/lib/_oneEntry";
import React from "react";

async function SignIn() {
  const api = await getApi();

  const signinForm = await api.Forms.getFormByMarker("sign-in-form");

  

  return <SignInFormClient formAtts={signinForm} />;
}

export default SignIn;
