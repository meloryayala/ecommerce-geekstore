import {ArrowDown} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import type {BadgeProps} from "@/components/ui/badge";
import {twMerge} from "tailwind-merge";

const DiscountBadge = ({children, className, ...props}: BadgeProps) => {
    return (
        <Badge className={twMerge("gap-1 px-2 py-[2px]", className)} {...props}>
            <ArrowDown size={14} />
            {children} %
        </Badge>
    );
};
export default DiscountBadge;
