import { prismaClient } from "@/lib/prisma";
import { Badge } from "@/components/ui/badge";
import ProductItem from "@/components/customComponents/productItem";
import { computedProductTotalPrice } from "@/helpers/product";
import { CATEGORY_ICONS } from "@/contants/categoryIcon";

const CatalogPage = async ({ params }: any) => {
  const category = await prismaClient.category.findFirst({
    where: {
      slug: params.slug,
    },
    include: {
      products: true,
    },
  });

  if(!category) {
      return null;
  }

  return (
    <div className="flex flex-col gap-8 p-5">
      <Badge
        className="w-fit gap-2 border-2 border-primary px-3 py-1 text-base uppercase"
        variant="outline"
      >
        {CATEGORY_ICONS[params.slug as keyof typeof CATEGORY_ICONS]}
        {params.slug}
      </Badge>

      <div className="grid grid-cols-2 gap-8">
        {category.products.map((product) => (
          <ProductItem
            key={product.slug}
            product={computedProductTotalPrice(product)}
          />
        ))}
      </div>
    </div>
  );
};
export default CatalogPage;
