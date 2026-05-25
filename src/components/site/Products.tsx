import { PRODUCTS, waLink } from "@/lib/site-data";
import { MessageCircle, Plus } from "lucide-react";

export function Products({ onAdd }: { onAdd: (id: string) => void }) {
  return (
    <section id="productos" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-accent uppercase tracking-wider">Productos</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold">Catálogo <span className="text-gradient">Púrpura</span></h2>
          <p className="mt-4 text-muted-foreground">Servicios y planes diseñados para cada necesidad. Agrega al carrito o solicita directamente por WhatsApp.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PRODUCTS.map((p) => (
            <article key={p.id} className="group glass rounded-2xl p-5 card-shadow hover:border-accent/40 hover:-translate-y-1 transition-all flex flex-col">
              <span className="self-start text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent/10 rounded-full px-2.5 py-1">
                {p.category}
              </span>
              <h3 className="mt-4 font-semibold text-base">{p.name}</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed flex-1">{p.desc}</p>
              <p className="mt-4 text-lg font-bold text-gradient">{p.price}</p>
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => onAdd(p.id)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-brand h-10 text-xs font-semibold text-white hover:opacity-90 transition"
                >
                  <Plus className="h-3.5 w-3.5" /> Agregar
                </button>
                <a
                  href={waLink(`Hola, quiero solicitar: ${p.name} (${p.price}).`)}
                  target="_blank" rel="noreferrer"
                  aria-label="Solicitar por WhatsApp"
                  className="h-10 w-10 grid place-items-center rounded-full glass hover:bg-white/5"
                >
                  <MessageCircle className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
