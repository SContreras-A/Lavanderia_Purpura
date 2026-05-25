import logo from "@/assets/logo-purpura.png";
import { PHONE_DISPLAY, MAPS_URL, WA_PHONE } from "@/lib/site-data";

const links = [
  { href: "#sobre", label: "Sobre la empresa" },
  { href: "#productos", label: "Productos" },
  { href: "#galeria", label: "Galería" },
  { href: "#marketplace", label: "Marketplace" },
  { href: "#contacto", label: "Contacto" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo Lavandería Púrpura" className="h-12 w-12 rounded-full ring-1 ring-white/10" />
            <p className="font-bold text-lg">Lavandería <span className="text-gradient">Púrpura</span></p>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Cuidamos tus prendas con calidad, color y confianza.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold mb-4">Enlaces rápidos</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {links.map((l) => (
              <li key={l.href}><a href={l.href} className="hover:text-foreground transition">{l.label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold mb-4">Contacto</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href={`tel:+${WA_PHONE}`} className="hover:text-foreground">{PHONE_DISPLAY}</a></li>
            <li><a href={MAPS_URL} target="_blank" rel="noreferrer" className="hover:text-foreground">Ver ubicación</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-xs text-muted-foreground text-center">
          © 2026 Lavandería Púrpura. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
