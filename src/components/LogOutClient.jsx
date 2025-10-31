import logOutAction from "@/_serverActions/logoutAction";
import { LogOut } from "lucide-react";
import Link from "next/link";
import React from "react";

function LogoutClient() {
  return (
    <form action={logOutAction}>
      <div className="w-full my-2 gap-y-3 flex flex-col " size={"sm"}>
        <button type="submit" href={"/"} className="flex items-center gap-x-2">
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </form>
  );
}

export default LogoutClient;
