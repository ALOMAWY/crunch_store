import { create } from "zustand";

const useCartStore = create((set) => ({
  cartItems: [],
  addToCart: (product) => {
    set((state) => ({
      cartItems: [...state.cartItems, product],
    }));
    getCartItemsCount: () => set((state) => state.cartItems.length);
  },
}));

export default useCartStore;
