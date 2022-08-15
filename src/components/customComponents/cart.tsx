import { Badge } from "@/components/ui/badge";
import { ShoppingCartIcon } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";
import CartItem from "@/components/customComponents/cartItem";
import {Separator} from "@/components/ui/separator";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Button} from "@/components/ui/button";

const Cart = ({}) => {
  const { products,subTotal, total, totalDiscount } =
    useContext(CartContext);

  return (
    <div className="flex h-full flex-col gap-8 p-5">
      <Badge
        className="w-fit gap-2 border-2 border-primary px-3 py-1 text-base uppercase"
        variant="outline"
      >
        <ShoppingCartIcon />
        Shopping Cart
      </Badge>

      <ScrollArea className="h-full ">
        <div className="flex flex-col gap-5">
          {products.length > 0 ? (
            products.map((product) => (
              <CartItem key={product.id} product={product} />
            ))
          ) : (
            <p className="text-center opacity-60">
              You don't have products yet.
            </p>
          )}
        </div>
      </ScrollArea>

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

          <Button className="uppercase font-bold mt-5">
              Purchase
          </Button>
      </div>
    </div>
  );
};
export default Cart;
