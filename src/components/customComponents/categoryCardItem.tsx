import Image from "next/image";
import {Category} from "@prisma/client";
import {FC} from "react";

interface CategoryCardItemProps {
    category: Category;
}

const CategoryCardItem: FC<CategoryCardItemProps> = ({category}) => {
    console.log(category)
    return (
        <div className="flex flex-col">
            <div className="flex w-full h-[150px] items-center justify-center bg-category-gradient rounded-t-lg">
                <Image
                    src={category.imageUrl}
                    height={0}
                    width={0}
                    sizes="100vw"
                    className="h-auto max-h-[70%] w-auto max-w-[80%]"
                    style={{
                        objectFit: "contain",
                    }}
                    alt={category.name}
                />
            </div>
            <div className="bg-accent py-3 rounded-b-lg">
                <p className="text-sm font-semibold text-center">
                {category.name}
                </p>
            </div>

        </div>
    );
};
export default CategoryCardItem;
