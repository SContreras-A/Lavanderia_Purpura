import { useMemo, useState } from "react";
import { PRODUCTS, type Product } from "@/lib/site-data";
import { Plus } from "lucide-react";

const CATEGORIES = ["Todos", "Lavado", "Domicilio", "Tinturado", "Planes"] as const;

export function Marketplace({ onAdd }: { onAdd: (id: string) => void }) {
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]>("Todos");

  const filtered = useMemo<Product[]>(
    () => (cat === "Todos" ? PRODUCTS : PRODUCTS.filter((p) => p.category === cat)),
    [cat],
  );

  return (
    <section id="marketplace" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 -z-10 bg-hero opacity-60" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-accent uppercase tracking-wider">Marketplace</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold">Marketplace <span className="text-gradient">Púrpura</span></h2>
          <p className="mt-4 text-muted-foreground">
            Elige el servicio que necesitas, arma tu pedido y agenda tu recogida en minutos.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-4 h-9 rounded-full text-xs font-semibold transition ${
                cat === c
                  ? "bg-gradient-brand text-white glow"
                  : "glass hover:bg-white/5 text-muted-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p) => (
            <article key={p.id} className="glass rounded-2xl p-6 card-shadow hover:-translate-y-1 hover:border-accent/40 transition-all">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-accent">{p.category}</span>
                  <h3 className="mt-1 font-semibold text-base">{p.name}</h3>
                </div>
                <p className="text-base font-bold text-gradient whitespace-nowrap">{p.price}</p>
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              <button
                onClick={() => onAdd(p.id)}
                className="mt-5 w-full inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-brand h-11 text-sm font-semibold text-white hover:opacity-90 transition"
              >
                <Plus className="h-4 w-4" /> Agregar al carrito
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
