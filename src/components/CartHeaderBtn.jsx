"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import useCartStore from "@/store/cartStore";
import Cart from "./Cart";

function CartHeaderBtn() {
  const cartItemCount = useCartStore((state) => state.cartItems.length);

  return (
    <HoverCard openDelay={0} closeDelay={0}>
      <HoverCardTrigger className="flex items-center cursor-pointer gap-x-1">
        <ShoppingCart size={20} /> Cart <span>{cartItemCount}</span>
      </HoverCardTrigger>
      <HoverCardContent>
        <Cart />
      </HoverCardContent>
    </HoverCard>
  );
}

export default CartHeaderBtn;
