import {Product} from "@prisma/client";
import {FC} from "react";
import ProductItem from "@/components/customComponents/productItem";
import {computedProductTotalPrice} from "@/helpers/product";

interface ProductListProps {
    products: Product[];
}

const ProductList: FC<ProductListProps> = ({products}) => {
    return (
        <div className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
            {products.map(product => (
                <div className="w-[170px] max-w-[170px]" key={product.id}>
                <ProductItem product={computedProductTotalPrice(product)} />
                </div>
            ))}
        </div>
    );
};
export default ProductList;
