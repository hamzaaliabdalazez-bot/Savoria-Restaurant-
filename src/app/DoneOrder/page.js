"use client";

import { useCart } from "../../context/CartContext";
import { motion } from "framer-motion";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Link from "next/link";

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, totalAmount, clearCart } =
    useCart();

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h1 className="mb-8 text-4xl font-bold text-white text-center">
          Your Order is Done
        </h1>

        <div className="flex justify-center">
          <div className="rounded-xl border border-gray-700 bg-gray-800 p-8 h-fit w-120">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white">
              <IoMdCheckmarkCircleOutline  className="h-10 w-10"/>
            </div>
            <h2 className="text-xl font-bold text-white mb-4 text-center">
              Order Confirmed
            </h2>
            <div className="space-y-2 text-gray-300">
              <div className="flex justify-between">
                <span>
                  Items (
                  {cartItems.reduce((sum, item) => sum + item.quantity, 0)})
                </span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>
              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-6 rounded-xl border border-gray-700 bg-gray-800 p-6 w-fill"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-11 w-11 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-white">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-400">
                      ${item.price.toFixed(2)} each
                    </p>
                    <div className="mt-3 flex items-center gap-3">
                      <span className=" text-center text-white text-lg ">
                        {item.quantity} Items
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
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
            <div className="flex items-center justify-center gap-7">
              <Link href="/">
                <button
                  onClick={clearCart}
                  className="mt-6 w-full rounded-md bg-gray-700 px-4 py-3 font-semibold text-white hover:bg-gray-600"
                >
                  Back To Home
                </button>
              </Link>
              <Link href="/menu">
                <button
                  className="mt-6 w-full rounded-md bg-orange-500 px-4 py-3 font-semibold text-white hover:bg-orange-600"
                  onClick={clearCart}
                >
                  Continuo Shoppoing
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
