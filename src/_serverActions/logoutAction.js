"use server";

import { cookies } from "next/headers";

async function logOutAction() {
  const cookiesStore = await cookies();
  cookiesStore.delete("new-token");
  cookiesStore.delete("user_info");
  cookiesStore.delete("user_token");
}

export default logOutAction;
