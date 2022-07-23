import {Category} from "@prisma/client";
import {Badge} from "@/components/ui/badge";
import {FC} from "react";
import {CATEGORY_ICONS} from "@/contants/categoryIcon";

interface CategoryItemProps {
    category: Category
}

const CategoryMenuItem: FC<CategoryItemProps> = ({category}) => {
    return (
        <Badge variant="outline" className="flex items-center justify-center py-3 gap-2 rounded-lg">
    {/*@ts-ignore*/}
            {CATEGORY_ICONS[category.slug]}
            <span className="text-xs font-bold">{category.name}</span>
        </Badge>
    );
};
export default CategoryMenuItem;
