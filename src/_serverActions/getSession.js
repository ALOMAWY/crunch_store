"use server";

import { getApi } from "@/lib/_oneEntry";
import { cookies } from "next/headers";

export default async function getSession() {
  const api = await getApi();
  const cookiesStore = await cookies();
  const USER_TOKEN = cookiesStore.get("user_token")?.value;

  try {
    if (!USER_TOKEN) return null;
    const user = await api.Users.setAccessToken(USER_TOKEN).getUser();
    if (!user) return null;
    return user
  } catch (error) {
    console.error(error);
  }
}
