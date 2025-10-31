"use server";

import { cookies } from "next/headers";

export default async function getNewToken() {
  const cookieStore = await cookies(); // ← MUST AWAIT
  return cookieStore.get("new-token")?.value ?? null;
}
