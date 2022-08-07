import { Badge } from "@/components/ui/badge";
import { ShoppingCartIcon } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";
import CartItem from "@/components/customComponents/cartItem";

const Cart = ({}) => {
  const { products, cartBasePrice, cartTotalDiscount, cartTotalPrice } =
    useContext(CartContext);

  return (
    <div className="flex flex-col p-5 gap-8">
      <Badge
        className="w-fit gap-2 border-2 border-primary px-3 py-1 text-base uppercase"
        variant="outline"
      >
        <ShoppingCartIcon />
        Shopping Cart
      </Badge>

      <div className="flex flex-col gap-5">
        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
export default Cart;
