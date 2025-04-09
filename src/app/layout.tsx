import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/context/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gauchito Argentino",
  description: "Nuestros mates, cuencos, tablas y platos de caldén son piezas artesanales únicas,. Ideales para quienes buscan productos resistentes y con diseño exclusivo.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <CartProvider>
          <Header />
          <main className="min-h-screen">
            {children}
        </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
