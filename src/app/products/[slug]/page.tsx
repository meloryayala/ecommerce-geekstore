import { FC } from "react";
import { prismaClient } from "@/lib/prisma";
import ProductImage from "@/components/customComponents/productImage";
import ProductInfo from "@/components/customComponents/productInfo";
import { computedProductTotalPrice } from "@/helpers/product";
import ProductList from "@/components/customComponents/productList";
import SectionTitle from "@/components/customComponents/sectionTitle";

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
    include: {
      category: {
        include: {
          products: {
            where: {
              slug: {
                not: params.slug,
              },
            },
          },
        },
      },
    },
  });

  if (!product) return null;

  return (
    <div className="flex flex-col gap-8 pb-8">
      <ProductImage imageUrls={product.imageUrls} name={product.name} />
      <ProductInfo product={computedProductTotalPrice(product)} />
      <div className="mt-8 ">
        <SectionTitle>Recommended products</SectionTitle>
        <ProductList products={product.category.products} />
      </div>
    </div>
  );
};
export default ProductDetailsPage;
