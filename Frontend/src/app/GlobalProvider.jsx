"use client";

import { CartProvider } from "@/app/context/CartContext";
import { FilterProvider } from "@/app/context/FilterContext";
import { WishListProvider } from "@/app/context/WishListContext";
import { AuthProvider } from "@/app/context/AuthContext"

export function GlobalProvider({ children }) {
  return (
    <AuthProvider>
      <WishListProvider>
        <FilterProvider>
          <CartProvider>{children}</CartProvider>
        </FilterProvider>
      </WishListProvider>
    </AuthProvider>
  );
}
