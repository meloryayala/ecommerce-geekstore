import {FC} from "react";
import {prismaClient} from "@/lib/prisma";

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
        <div>{product.name}</div>
    );
};
export default ProductDetailsPage;
