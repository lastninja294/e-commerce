import { configureStore } from "@reduxjs/toolkit";

import CartReducer from "@/Redux/features/Cart/CartSlice";
import WishListReducer from "@/Redux/features/wishlist/WishListSlice";

export const store = configureStore({
  reducer: {
    cart: CartReducer,
    wishlist: WishListReducer,
  },
});
