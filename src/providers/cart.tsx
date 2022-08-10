"use client";

import { createContext, FC, ReactNode, useMemo, useState } from "react";
import { ProductWithTotalPrice } from "@/helpers/product";

interface CartProviderProps {
  children: ReactNode;
}

export interface CartProduct extends ProductWithTotalPrice {
  quantity: number;
}

interface ICartContext {
  products: CartProduct[];
  cartTotalPrice: number;
  cartBasePrice: number;
  cartTotalDiscount: number;
  addProductToCart: (product: CartProduct) => void;
  decreaseProductQuantity: (productId: string) => void;
  increaseProductQuantity: (productId: string) => void;
  deleteProductCart: (productId: string) => void;
  subTotal: number;
  total: number;
  totalDiscount: number;
}

export const CartContext = createContext<ICartContext>({
  products: [],
  cartTotalPrice: 0,
  cartBasePrice: 0,
  cartTotalDiscount: 0,
  addProductToCart: () => {},
  decreaseProductQuantity: () => {},
  increaseProductQuantity: () => {},
  deleteProductCart: () => {},
  subTotal: 0,
  total: 0,
  totalDiscount: 0,
});

export const CartProvider: FC<CartProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<CartProduct[]>([]);

  const subTotal = useMemo(() => {
    return products.reduce((acc, product) => {
      return acc + Number(product.basePrice);
    }, 0);
  }, [products]);

  const total = useMemo(() => {
    return products.reduce((acc, product) => {
      return acc + product.totalPrice;
    }, 0);
  }, [products]);

  const totalDiscount = subTotal - total;

  const addProductToCart = (product: CartProduct) => {
    const productIsAlreadyOnCart = products.some(
      (cartProduct) => cartProduct.id === product.id,
    );

    if (productIsAlreadyOnCart) {
      //if product is already on the cart just add the amount selected
      setProducts((prevState) =>
        prevState.map((cartProduct) => {
          if (cartProduct.id === product.id) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + product.quantity,
            };
          } else return cartProduct;
        }),
      );
    } else {
      //Otherwise add the product to the cart list
      setProducts((prevState) => [...prevState, product]);
    }
  };

  const decreaseProductQuantity = (productId: string) => {
    setProducts((prevState) =>
      prevState
        .map((cartProduct) => {
          if (cartProduct.id === productId) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity - 1,
            };
          } else return cartProduct;
        })
        .filter((cartProduct) => cartProduct.quantity > 0),
    );
  };

  const increaseProductQuantity = (productId: string) => {
    setProducts((prevState) =>
      prevState.map((cartProduct) => {
        if (cartProduct.id === productId) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + 1,
          };
        } else return cartProduct;
      }),
    );
  };

  const deleteProductCart = (productId: string) => {
    setProducts((prevState) =>
      prevState.filter((cartProduct) => cartProduct.id !== productId),
    );
  };

  return (
    <CartContext.Provider
      value={{
        products,
        cartTotalPrice: 0,
        cartBasePrice: 0,
        cartTotalDiscount: 0,
        addProductToCart,
        decreaseProductQuantity,
        increaseProductQuantity,
        deleteProductCart,
        subTotal,
        total,
        totalDiscount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
