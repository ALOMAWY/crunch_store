"use server";

import { cookies } from "next/headers";

export default async function setNewToken(token) {
  const cookiesStore = await cookies();
  return cookiesStore.set("new-token", token);
}
