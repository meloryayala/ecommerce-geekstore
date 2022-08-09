"use client";

import { FC, useContext, useState } from "react";
import { ProductWithTotalPrice } from "@/helpers/product";
import { ArrowLeft, ArrowRight, TruckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import DiscountBadge from "@/components/discountBadge";
import { CartContext } from "@/providers/cart";

interface ProductInfoProps {
  product: ProductWithTotalPrice;
}

const ProductInfo: FC<ProductInfoProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addProductToCart } = useContext(CartContext);

  const handleDecreaseClick = () => {
    setQuantity((currentState) =>
      currentState === 1 ? currentState : currentState - 1,
    );
  };

  const handleIncreaseClick = () => {
    setQuantity((currentState) => currentState + 1);
  };

  const handleAddToCartClick = () => {
    addProductToCart({
      ...product,
      quantity,
    });
  };

  return (
    <div className="flex flex-col gap-5 px-5">
      <h1 className="text-lg">{product.name}</h1>

      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-bold">
            € {product.totalPrice.toFixed(2)}
          </h2>
          {product.discountPercentage > 0 && (
            <DiscountBadge>{product.discountPercentage}</DiscountBadge>
          )}
        </div>

        {product.discountPercentage > 0 && (
          <p className="text-md line-through opacity-75">
            € {Number(product.basePrice).toFixed(2)}
          </p>
        )}
      </div>

      <div className="flex items-center gap-2">
        <Button onClick={handleDecreaseClick} size="icon" variant="outline">
          <ArrowLeft size={16} />
        </Button>

        <span>{quantity}</span>

        <Button onClick={handleIncreaseClick} size="icon" variant="outline">
          <ArrowRight size={16} />
        </Button>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="font-bold">Decription</h3>
        <p className="text-md opacity-60">{product.description}</p>
      </div>

      <div className="mt-8">
        <Button
          onClick={handleAddToCartClick}
          className="w-full font-bold uppercase"
        >
          Add to cart
        </Button>
      </div>

      <div className="flex items-center justify-between rounded-lg bg-accent p-4">
        <div className="flex items-center gap-2">
          <TruckIcon size={50} />
          <div className="flex flex-col">
            <p>
              Delivery by
              <span className="font-bold"> FSPacket®</span>
            </p>
            <p className="text-primary-light">Shipping worldwide</p>
          </div>
        </div>
        <span className="font-bold"> Free delivery</span>
      </div>
    </div>
  );
};
export default ProductInfo;
