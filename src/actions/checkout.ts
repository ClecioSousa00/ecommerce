'use server'

import { CartProduct } from '@/context/contextProducts'
import { calculatePriceWithDiscount } from '@/utils/calculatePriceWithDiscount'
import Stripe from 'stripe'

export const createCheckout = async (products: CartProduct[]) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2023-10-16',
  })

  const checkout = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'payment',
    success_url: process.env.HOST_URL,
    cancel_url: process.env.HOST_URL,

    line_items: products.map((product) => {
      const productPrice = calculatePriceWithDiscount(
        Number(product.basePrice),
        product.discountPercentage,
      )

      return {
        price_data: {
          currency: 'brl',
          product_data: {
            name: product.name,
            description: product.description,
            images: product.imageUrls,
          },
          unit_amount: productPrice * 100,
        },
        quantity: product.quantity,
      }
    }),
  })

  return checkout
}
