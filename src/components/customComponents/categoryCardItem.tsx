import Image from "next/image";
import { Category } from "@prisma/client";
import { FC } from "react";
import Link from "next/link";

interface CategoryCardItemProps {
  category: Category;
}

const CategoryCardItem: FC<CategoryCardItemProps> = ({ category }) => {
  return (
    <Link href={`/category/${category.slug}`}>
      <div className="flex flex-col">
        <div className="flex h-[150px] w-full items-center justify-center rounded-t-lg bg-category-gradient">
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
        <div className="rounded-b-lg bg-accent py-3">
          <p className="text-center text-sm font-semibold">{category.name}</p>
        </div>
      </div>
    </Link>
  );
};
export default CategoryCardItem;
