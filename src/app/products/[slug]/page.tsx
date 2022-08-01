import { FC } from "react";
import { prismaClient } from "@/lib/prisma";
import ProductImage from "@/components/customComponents/productImage";
import ProductInfo from "@/components/customComponents/productInfo";
import { computedProductTotalPrice } from "@/helpers/product";

interface ProductDetailsPageProps {
  params: {
    slug: string;
  };
}

const ProductDetailsPage: FC<ProductDetailsPageProps> = async ({ params }) => {
  const product = await prismaClient.product.findFirst({
    where: {
      slug: params.slug,
    },
  });

  if (!product) return null;

  return (
    <div className="flex flex-col gap-8">
      <ProductImage imageUrls={product.imageUrls} name={product.name} />

      <div className="px-5">
        <ProductInfo product={computedProductTotalPrice(product)} />
      </div>

    </div>
  );
};
export default ProductDetailsPage;
