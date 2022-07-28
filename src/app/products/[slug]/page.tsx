import {FC} from "react";
import {prismaClient} from "@/lib/prisma";
import ProductImage from "@/components/customComponents/productImage";

interface ProductDetailsPageProps {
    params: {
        slug: string
    }
}

const ProductDetailsPage: FC<ProductDetailsPageProps> = async ({ params }) => {
    const product = await prismaClient.product.findFirst({
        where: {
            slug: params.slug,
        }
    })

    if (!product) return null;

    return (
        <div className="">
            <ProductImage imageUrls={product.imageUrls} name={product.name} />
        </div>
    );
};
export default ProductDetailsPage;
