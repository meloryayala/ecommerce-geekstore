"use server"

import type {CartProduct} from "@/providers/cart";
import Stripe from "stripe"

export const CreateCheckout = async (products: CartProduct[]) => {
    //create checkout
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
        apiVersion: "2023-10-16"
        });
    const checkout = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: 'payment',
        success_url: process.env.HOST_URL,
        cancel_url: process.env.HOST_URL,
        line_items: products.map(product => {
            return {
                price_data: {
                    currency: 'eur',
                    product_data: {
                        name: product.name,
                        description: product.description,
                        images: product.imageUrls
                    },
                    unit_amount: product.totalPrice * 100
                },
                quantity: product.quantity
            }
        })
    })

    //return checkout
    return checkout;
};
