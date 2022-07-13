import {Category} from "@prisma/client";
import {Badge} from "@/components/ui/badge";
import {HeadphonesIcon, KeyboardIcon, MonitorIcon, MouseIcon, SpeakerIcon, SquareIcon} from "lucide-react";
import {FC} from "react";

interface CategoryItemProps {
    category: Category
}

const CategoryItem: FC<CategoryItemProps> = ({category}) => {
    const categoryIcon = {
        "mouses": <MouseIcon size={16} />,
        "keyboards": <KeyboardIcon size={16} />,
        "monitors": <MonitorIcon size={16} />,
        "headphones": <HeadphonesIcon size={16} />,
        "mousepads": <SquareIcon size={16} />,
        "speakers": <SpeakerIcon size={16} />,
    }
    return (
        <Badge variant="outline" className="flex items-center justify-center py-3 gap-2 rounded-lg">
            {categoryIcon[category.slug as keyof typeof categoyIcon]}
            <span className="text-xs font-bold">{category.name}</span>
        </Badge>
    );
};
export default CategoryItem;
