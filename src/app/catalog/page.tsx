import {Badge} from "@/components/ui/badge";
import {ShapesIcon} from "lucide-react";
import {prismaClient} from "@/lib/prisma";
import CategoryCardItem from "@/components/customComponents/categoryCardItem";

const CatalogPage = async () => {
    const categories = await prismaClient.category.findMany({});

    return (
        <div className="flex flex-col gap-8 p-5">
            <Badge
                className="w-fit gap-2 text-base uppercase border-primary border-2 px-3 py-1"
                variant="outline">
                <ShapesIcon size={16} />
                Catalog
            </Badge>

            <div className="grid grid-cols-2 flex-wrap gap-8">
                {categories.map(category => (
                    <CategoryCardItem key={category.id} category={category} />
                ))}
            </div>
        </div>
    );
};
export default CatalogPage;
