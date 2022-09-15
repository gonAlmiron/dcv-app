import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext()

export const useCartContext = () => {
    return useContext(CartContext)
}