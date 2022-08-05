import {Badge} from "@/components/ui/badge";
import {ShoppingCartIcon} from "lucide-react";
import {useContext} from "react";
import {CartContext} from "@/providers/cart";

const Cart = ({}) => {
    const {products, cartBasePrice, cartTotalDiscount, cartTotalPrice} = useContext(CartContext)

    return (
        <div className="p-5">
            <Badge
                className="w-fit gap-2 border-2 border-primary px-3 py-1 text-base uppercase"
                variant="outline"
            >
                <ShoppingCartIcon />
                Shopping Cart
            </Badge>

            <div>
                {products.map(product => (
                    <h1>{product.name}</h1>
                ))}
            </div>
        </div>
    );
};
export default Cart;
