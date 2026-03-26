"use client";

import Link from "next/link";
import { useCart } from "../../context/CartContext";
import DeleteIcon from '@mui/icons-material/Delete';
import { motion } from "framer-motion";

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, totalAmount, clearCart } =
    useCart();

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h1 className="mb-8 text-4xl font-bold text-white">Your Cart</h1>
        {cartItems.length === 0 ? (
          <div className="rounded-xl border border-gray-700 bg-gray-800 p-8 text-center text-gray-400">
            Your cart is empty. <Link href="/menu" className="text-orange-400 hover:underline">Go to Menu to add delicious meals.enjoy!</Link>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-6 rounded-xl border border-gray-700 bg-gray-800 p-6"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-20 w-20 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-400">
                      ${item.price.toFixed(2)} each
                    </p>
                    <div className="mt-3 flex items-center gap-3">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="rounded border border-gray-600 px-3 py-1 text-gray-300 hover:bg-gray-700"
                      >
                        -
                      </button>
                      <span className="w-8 text-center text-white">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="rounded border border-gray-600 px-3 py-1 text-gray-300 hover:bg-gray-700"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="rounded bg-red-600 px-2 py-1 text-sm font-medium text-white hover:bg-red-700"
                      >
                        <DeleteIcon />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="rounded-xl border border-gray-700 bg-gray-800 p-6 h-fit">
              <h2 className="text-xl font-bold text-white mb-4">
                Order Summary
              </h2>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>
                    Items (
                    {cartItems.reduce((sum, item) => sum + item.quantity, 0)})
                  </span>
                  <span>${totalAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span>$4.99</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${(totalAmount * 0.08).toFixed(2)}</span>
                </div>
              </div>
              <div className="border-t border-gray-600 mt-4 pt-4">
                <div className="flex justify-between text-xl font-bold text-orange-400">
                  <span>Total</span>
                  <span>
                    ${(totalAmount + 4.99 + totalAmount * 0.08).toFixed(2)}
                  </span>
                </div>
              </div>
              <button
                onClick={clearCart}
                className="mt-6 w-full rounded-md bg-gray-700 px-4 py-2 font-semibold text-white hover:bg-gray-600"
              >
                Clear Cart
              </button>
              <Link href="/DoneOrder">
                <button
                  className="mt-3 w-full rounded-md bg-orange-500 px-4 py-3 font-semibold text-white hover:bg-orange-600"
                  onClick={() => clearCart}
                >
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
