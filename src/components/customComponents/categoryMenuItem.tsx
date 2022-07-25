import {Category} from "@prisma/client";
import {Badge} from "@/components/ui/badge";
import {FC} from "react";
import {CATEGORY_ICONS} from "@/contants/categoryIcon";
import Link from "next/link";

interface CategoryItemProps {
    category: Category
}

const CategoryMenuItem: FC<CategoryItemProps> = ({category}) => {
    return (
      <Link href={`/category/${category.slug}`}>
        <Badge
          variant="outline"
          className="flex items-center justify-center gap-2 rounded-lg py-3"
        >
          {/*@ts-ignore*/}
          {CATEGORY_ICONS[category.slug]}
          <span className="text-xs font-bold">{category.name}</span>
        </Badge>
      </Link>
    );
};
export default CategoryMenuItem;
