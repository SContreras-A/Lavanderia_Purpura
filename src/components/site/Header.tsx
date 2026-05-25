import { useEffect, useState } from "react";
import logo from "@/assets/logo-purpura.png";
import { ShoppingBag, Menu, X } from "lucide-react";

const links = [
  { href: "#sobre", label: "Sobre la empresa" },
  { href: "#servicios", label: "Servicios" },
  { href: "#productos", label: "Productos" },
  { href: "#marketplace", label: "Marketplace" },
  { href: "#galeria", label: "Galería" },
  { href: "#contacto", label: "Contacto" },
];

export function Header({ cartCount, onCartClick }: { cartCount: number; onCartClick: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass card-shadow" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between gap-4">
        <a href="#inicio" className="flex items-center gap-3 group">
          <img src={logo} alt="Logo Lavandería Púrpura" className="h-10 w-10 rounded-full object-cover ring-1 ring-white/10 group-hover:ring-accent transition" />
          <span className="font-bold text-base md:text-lg tracking-tight">
            Lavandería <span className="text-gradient">Púrpura</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">{l.label}</a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={onCartClick}
            aria-label="Ver carrito"
            className="relative h-10 w-10 grid place-items-center rounded-full glass hover:bg-white/5 transition"
          >
            <ShoppingBag className="h-4 w-4" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 h-5 min-w-5 px-1 rounded-full bg-gradient-brand text-[10px] font-bold grid place-items-center">
                {cartCount}
              </span>
            )}
          </button>
          <a
            href="#marketplace"
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-gradient-brand px-5 h-10 text-sm font-semibold text-white glow hover:opacity-90 transition"
          >
            Agendar servicio
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menú"
            className="lg:hidden h-10 w-10 grid place-items-center rounded-full glass"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden glass border-t border-white/10">
          <nav className="px-6 py-4 flex flex-col gap-3 text-sm">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-1 text-muted-foreground hover:text-foreground">
                {l.label}
              </a>
            ))}
            <a href="#marketplace" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-brand px-5 h-10 text-sm font-semibold text-white">
              Agendar servicio
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
