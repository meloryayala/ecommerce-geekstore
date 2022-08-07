import type { CartProduct } from "@/providers/cart";
import { FC } from "react";
import { ArrowLeft, ArrowRight, TrashIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface CartItemProps {
  product: CartProduct;
}

const CartItem: FC<CartItemProps> = ({ product }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="flex h-[90px] w-[90px] items-center justify-center rounded-lg bg-accent">
          <Image
            src={product.imageUrls[0]}
            alt={product.name}
            height={0}
            width={0}
            sizes="100vw"
            className="h-auto max-h-[70%] w-auto max-w-[80%]"
          />
        </div>

        <div className="flex flex-col gap-3">
          <div>
            <p className="text-xs">{product.name}</p>

            <div className="flex items-center gap-2">
              <p className="text-sm font-bold">
                € {product.totalPrice.toFixed(2)}
              </p>

              {product.discountPercentage > 0 && (
                <p className="text-xs line-through opacity-75">
                  € {Number(product.basePrice).toFixed(2)}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button size="icon" variant="outline" className="h-8 w-8">
              <ArrowLeft size={16} />
            </Button>

            <span className="text-xs">{product.quantity}</span>

            <Button size="icon" variant="outline" className="h-8 w-8">
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </div>

      <Button size="icon" variant="outline">
        <TrashIcon size={16} />
      </Button>
    </div>
  );
};
export default CartItem;
