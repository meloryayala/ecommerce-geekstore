import { FC } from "react";
import Image from "next/image";
import { ProductWithTotalPrice } from "@/helpers/product";
import { Badge } from "@/components/ui/badge";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}

const ProductItem: FC<ProductItemProps> = ({ product }) => {
  return (
    <Link href={`/products/${product.slug}`}>
      <div className="flex flex-col gap-4">
        <div className="relative flex h-[170px] w-full items-center justify-center rounded-lg bg-accent">
          <Image
            src={product.imageUrls[0]}
            height={0}
            width={0}
            sizes="100vw"
            className="h-auto max-h-[70%] w-auto max-w-[80%]"
            style={{
              objectFit: "contain",
            }}
            alt={product.name}
          />

          {product.discountPercentage > 0 && (
            <Badge className="absolute left-3 top-3 gap-1 px-2 py-[2px]">
              <ArrowDown size={14} />
              {product.discountPercentage}%
            </Badge>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <p className=" overflow-hidden text-ellipsis whitespace-nowrap text-sm">
            {product.name}
          </p>

          <div className="flex items-center gap-2">
            {product.discountPercentage > 0 ? (
              <>
                <p className="font-semibold">
                  € {product.totalPrice.toFixed(2)}
                </p>
                <p className="text-xs line-through opacity-75">
                  € {Number(product.basePrice).toFixed(2)}
                </p>
              </>
            ) : (
              <p className="text-sm font-semibold">
                € {product.totalPrice.toFixed(2)}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};
export default ProductItem;
