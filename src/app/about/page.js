"use client";
import { motion } from "framer-motion";
import Image from "next/image";
// import ChefOnWork from "@/assets/chefwork.webp";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero/Founder Intro */}
      <section className="relative py-32">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1920&q=80"
            alt="Savoria Kitchen"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-white mb-6"
          >
            From Passion to Plate
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            At Savoria, we believe that great food is an art form. Every dish
            tells a story of dedication, creativity, and uncompromising quality.
            Our journey began with a simple idea: to create culinary experiences
            that linger in memory.
          </motion.p>
        </div>
      </section>

      {/* Our Philosophy (Bento Style) */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white text-center mb-12"
          >
            Our Philosophy
          </motion.h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "🌱",
                title: "Farm-to-Table",
                desc: "Fresh, locally sourced ingredients",
              },
              {
                icon: "👨‍🍳",
                title: "Artisanal Preparation",
                desc: "Handcrafted with care and precision",
              },
              {
                icon: "🤝",
                title: "Community Focused",
                desc: "Building connections through food",
              },
              {
                icon: "⭐",
                title: "Quality First",
                desc: "Excellence in every bite",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-700 p-6 rounded-lg text-center hover:bg-gray-600 transition-colors"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Kitchen (Image-Heavy) */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white text-center mb-12"
          >
            Our Kitchen
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/assets/chefwork.webp"
                alt="Chef at work"
                className="rounded-lg shadow-2xl w-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Craftsmanship in Every Dish
              </h3>
              <p className="text-gray-300 mb-6">
                Our chefs bring years of experience and passion to every plate.
                From the first selection of ingredients to the final
                presentation, we maintain the highest standards of culinary
                excellence. Each dish is a masterpiece, crafted with precision
                and served with pride.
              </p>
              <p className="text-gray-300">
                We believe that great food brings people together, creates
                memories, and elevates everyday moments into extraordinary
                experiences.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Us (Final CTA) */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white mb-6"
          >
            Join Us on This Culinary Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto"
          >
            Experience the art of fine dining. Reserve your table or order
            online to discover why Savoria is more than just a
            restaurant—it&apos;s a destination.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/menu"
              className="bg-white text-orange-600 px-8 py-4 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Explore Our Menu
            </a>
            <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-md font-semibold text-lg transition-colors">
              Book a Table
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
