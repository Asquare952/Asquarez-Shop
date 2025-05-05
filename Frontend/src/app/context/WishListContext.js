"use client";

import { createContext, useContext, useEffect, useState } from "react";

const WishListContext = createContext();

export const WishListProvider = ({ children }) => {
  const [wishItems, setWishItems] = useState([]);
  

  // Load cart from localStorage on first render
  useEffect(() => {
    const storedWish = localStorage.getItem("wishList");
    if (storedWish) {
      setWishItems(JSON.parse(storedWish));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("wishList", JSON.stringify(wishItems));
  }, [wishItems]);

  const addToWishList = (product) => {
    setWishItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item } : item
        );
      }
      return [...prevItems, { ...product }];
    });
  };

  const removeFromWishList = (id) => {
    setWishItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const clearWishList = () => {
    setWishItems([]);
  };

  

  return (
    <WishListContext.Provider
      value={{
        wishItems,
        addToWishList,
        removeFromWishList,
        clearWishList,
      }}
    >
      {children}
    </WishListContext.Provider>
  );
};

export const useWish = () => useContext(WishListContext);
