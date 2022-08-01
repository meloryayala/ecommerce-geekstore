"use client";

import { FC, useState } from "react";
import { ProductWithTotalPrice } from "@/helpers/product";
import { Badge } from "@/components/ui/badge";
import {ArrowDown, ArrowLeft, ArrowRight, TruckIcon} from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductInfoProps {
  product: Pick<
    ProductWithTotalPrice,
    "basePrice" | "description" | "discountPercentage" | "totalPrice" | "name"
  >;
}

const ProductInfo: FC<ProductInfoProps> = ({ product }) => {
  const handleDecreaseClick = () => {
    setQuantity((currentState) =>
      currentState === 1 ? currentState : currentState - 1,
    );
  };

  const handleIncreaseClick = () => {
    setQuantity((currentState) => currentState + 1);
  };

  const [quantity, setQuantity] = useState(1);
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-lg">{product.name}</h1>

      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-bold">
            € {product.totalPrice.toFixed(2)}
          </h2>
          {product.discountPercentage > 0 && (
            <Badge className="gap-1 px-2 py-[2px]">
              <ArrowDown size={14} />
              {product.discountPercentage}%
            </Badge>
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
        <Button className="w-full font-bold uppercase">Add to cart</Button>
    </div>

        <div className="flex items-center bg-accent justify-between p-4 rounded-lg">
            <div className="flex items-center gap-2">
                <TruckIcon size={50} />
                <div className="flex flex-col">
                    <p>Delivery by
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
