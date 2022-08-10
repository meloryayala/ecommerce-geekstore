import { Badge } from "@/components/ui/badge";
import { ShoppingCartIcon } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";
import CartItem from "@/components/customComponents/cartItem";
import {Separator} from "@/components/ui/separator";

const Cart = ({}) => {
  const { products,subTotal, total, totalDiscount } =
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
          {products.length > 0 ? (
              products.map((product) => (
                  <CartItem key={product.id} product={product} />
              ))
          ): (
              <p className="font-semibold">You don't have products yet.</p>
          )}
      </div>

        <div className="flex flex-col gap-3">
            <Separator />
            <div className="flex items-center justify-between text-sm font-semibold">
                <p>Subtotal</p>
                <p>€ {subTotal.toFixed(2)}</p>
            </div>

            <Separator />
            <div className="flex items-center justify-between text-sm font-semibold">
                <p>Delivery</p>
                <p>Free</p>
            </div>

            <Separator />
            <div className="flex items-center justify-between text-sm font-semibold">
                <p>Discounts</p>
                <p>- {totalDiscount.toFixed(2)}</p>
            </div>

            <Separator />
            <div className="flex items-center justify-between text-sm font-semibold">
                <p>Total</p>
                <p>€ {total.toFixed(2)}</p>
            </div>
        </div>
    </div>
  );
};
export default Cart;
