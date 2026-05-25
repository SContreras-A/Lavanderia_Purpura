import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Products } from "@/components/site/Products";
import { Marketplace } from "@/components/site/Marketplace";
import { Gallery } from "@/components/site/Gallery";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { CartDrawer, type CartItem } from "@/components/site/CartDrawer";
import { WhatsAppFAB } from "@/components/site/WhatsAppFAB";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (id: string) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === id);
      if (existing) return prev.map((p) => (p.id === id ? { ...p, qty: p.qty + 1 } : p));
      return [...prev, { id, qty: 1 }];
    });
    setCartOpen(true);
  };

  const totalCount = cart.reduce((acc, i) => acc + i.qty, 0);

  return (
    <div className="min-h-screen">
      <Header cartCount={totalCount} onCartClick={() => setCartOpen(true)} />
      <main>
        <Hero />
        <About />
        <Services />
        <Products onAdd={addToCart} />
        <Marketplace onAdd={addToCart} />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFAB />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} items={cart} setItems={setCart} />
    </div>
  );
}
