import Link from "next/link";

import {
  ListOrdered,
  MessageSquareText,
  Settings,
  ShoppingCart,
  User,
} from "lucide-react";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "./ui/button";
import getSession from "@/_serverActions/getSession";
import LogoutClient from "./LogOutClient";
import CartHeaderBtn from "./CartHeaderBtn";

async function Header() {
  const user = await getSession();

  return (
    <header className="w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-300 py-4 px-5 md:px-8 flex items-center justify-between">
      <Link href={"/"}>Multi Store</Link>
      <div>
        {!user ? (
          <HoverCard openDelay={0} closeDelay={0}>
            <HoverCardTrigger className="flex items-center gap-x-1 cursor-pointer">
              <User size={20} />
              Sign In
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <p className="text-center">Welcome To Multi Store</p>
              <Button asChild className="rounded-full mt-3 w-full" size={"sm"}>
                <Link href={"/login"}>Sign In</Link>
              </Button>
              <p className="text-center mt-3"> --OR--</p>
              <Button asChild className="rounded-full mt-3 w-full" size={"sm"}>
                <Link href={"/signup"}>Sign Out</Link>
              </Button>
            </HoverCardContent>
          </HoverCard>
        ) : (
          <div className="flex gap-x-3">
            <HoverCard openDelay={0} closeDelay={0}>
              <HoverCardTrigger className="flex items-center gap-x-1 cursor-pointer">
                <User size={20} />
                Account
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <p className="text-center text-lg">
                  Hello {user.formData.find((cu) => cu.marker == "name").value}
                </p>
                <hr className="my-3" />
                <div className="w-full my-2 gap-y-3 flex flex-col " size={"sm"}>
                  <Link href={"/"} className="flex items-center gap-x-2">
                    <Settings size={20} />
                    Account Settings
                  </Link>
                  <Link href={"/"} className="flex items-center gap-x-2">
                    <ListOrdered size={20} />
                    My Oreder
                  </Link>
                </div>
                <hr className="my-3" />
                <div className="w-full my-2 gap-y-3 flex flex-col " size={"sm"}>
                  <Link href={"/"} className="flex items-center gap-x-2">
                    <MessageSquareText size={20} />
                    Messages
                  </Link>
                  <Link href={"/"} className="flex items-center gap-x-2">
                    <ShoppingCart size={20} />
                    Cart
                  </Link>
                </div>
                <hr className="my-3" />
                <LogoutClient />
              </HoverCardContent>
            </HoverCard>
            <CartHeaderBtn />
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
