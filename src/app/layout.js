import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "../context/CartContext";
import { AppProvider } from "../context/AppContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Savoria - Experience Art on a Plate",
  description:
    "Savoria is a modern fast-food brand delivering delicious burgers, pizza, pasta, and drinks with premium taste and convenience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-gray-900 text-white font-sans">
        <CartProvider>
          <AppProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </AppProvider>
        </CartProvider>
      </body>
    </html>
  );
}
