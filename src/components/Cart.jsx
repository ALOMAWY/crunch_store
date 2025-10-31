"use client";

// components/Cart.jsx
import useCartStore from "@/store/cartStore";

function Cart() {
  const cartItems = useCartStore((state) => state.cartItems);

  console.log("Cart Items :", Array.isArray(cartItems), cartItems);

  return (
    <div>
      <h2>Your Cart</h2>
      <hr className="my-3" />
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <p>
                {item.localizeInfos.title} - {item.attributeValues.price.value}{" "}
                $
              </p>
              <hr className="my-3" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
