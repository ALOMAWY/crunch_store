
import SignUpFormClient from "@/components/SignUpFormClient";
import { getApi } from "@/lib/_oneEntry";
import React from "react";

async function SignUp() {
  const api = await getApi();

  const signupForm = await api.Forms.getFormByMarker("sign-up-form");

  return <SignUpFormClient formAtts={signupForm} />;
}

export default SignUp;
