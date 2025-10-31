"use client";

import useCartStore from "@/store/cartStore";

function AddToCartBtn({ product }) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <button
      onClick={() => addToCart(product)}
      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700"
    >
      Add To Cart
    </button>
  );
}

export default AddToCartBtn;
