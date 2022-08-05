"use client"

import {Product} from "@prisma/client";
import {createContext, FC, useState} from "react";
import {ReactNode} from "react";

interface CartProviderProps {
    children: ReactNode
}

interface CartProduct extends Product {
    quantity: number;
}

interface ICartContext {
    products: CartProduct[];
    cartTotalPrice: number;
    cartBasePrice: number;
    cartTotalDiscount: number;
    addProductToCart: (product: CartProduct) => void;
}

export const CartContext = createContext<ICartContext>({
    products: [],
    cartTotalPrice: 0,
    cartBasePrice: 0,
    cartTotalDiscount: 0,
    addProductToCart: () => {},

})

export const CartProvider:FC<CartProviderProps> = ({children}) => {
    const [products, setProducts] = useState<CartProduct[]>([])
    
    const addProductToCart = (product: CartProduct) => {
        setProducts(currentState => [...currentState, product])
    } 
    
    return (
        <CartContext.Provider value={{
            products,
            cartTotalPrice: 0,
            cartBasePrice: 0,
            cartTotalDiscount: 0,
            addProductToCart,
        }}>
            {children}
        </CartContext.Provider>
    );
};

export  default CartProvider;