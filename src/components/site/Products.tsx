import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import serviceWash from "@/assets/service-wash.jpg";
import servicePickup from "@/assets/service-pickup.jpg";
import serviceDye from "@/assets/service-dye.jpg";
import productPlan from "@/assets/product-plan.jpg";
import productDelicate from "@/assets/product-delicate.jpg";

const CAROUSEL_ITEMS = [
  {
    id: "kilo",
    name: "Lavado por kilo",
    desc: "Tu ropa diaria limpia y fresca. Cobramos por peso para que pagues lo justo.",
    price: "$6.500/kg",
    image: serviceWash,
    tag: "Más popular",
  },
  {
    id: "delicada",
    name: "Prendas delicadas",
    desc: "Seda, lana y tejidos finos con el cuidado que merecen. Trato especial garantizado.",
    price: "Desde $12.000",
    image: productDelicate,
    tag: "Cuidado premium",
  },
  {
    id: "domicilio",
    name: "Recogida a domicilio",
    desc: "Pasamos por tu ropa y te la entregamos lista. Sin salir de casa.",
    price: "Gratis desde $40.000",
    image: servicePickup,
    tag: "Comodidad",
  },
  {
    id: "tinturado",
    name: "Tinturado básico",
    desc: "Renovamos el color de tus prendas favoritas con tintes de alta calidad.",
    price: "Consultar",
    image: serviceDye,
    tag: "Renovación",
  },
  {
    id: "plan",
    name: "Plan mensual familiar",
    desc: "Lavado ilimitado, recogida y entrega para toda la familia. El mejor valor.",
    price: "$189.000/mes",
    image: productPlan,
    tag: "Mejor valor",
  },
];

export function Products() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(1);

  const scrollTo = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]") as HTMLElement;
    if (!card) return;
    const gap = 20;
    const step = card.offsetWidth + gap;
    el.scrollBy({ left: dir === "left" ? -step : step, behavior: "smooth" });
    setActive((prev) =>
      Math.min(Math.max(prev + (dir === "left" ? -1 : 1), 0), CAROUSEL_ITEMS.length - 1),
    );
  };

  return (
    <section id="productos" className="py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-accent uppercase tracking-wider">Productos</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold">
              Catálogo <span className="text-gradient">Púrpura</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Servicios pensados para cada necesidad. Explora nuestro catálogo y encuentra lo que tu ropa necesita.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTo("left")}
              aria-label="Anterior"
              className="h-11 w-11 rounded-full glass grid place-items-center hover:bg-white/10 transition"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scrollTo("right")}
              aria-label="Siguiente"
              className="h-11 w-11 rounded-full glass grid place-items-center hover:bg-white/10 transition"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="mt-12 flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 scrollbar-hide"
          style={{ scrollbarWidth: "none" }}
        >
          {CAROUSEL_ITEMS.map((item, idx) => (
            <article
              key={item.id}
              data-card
              className="group relative flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] snap-center rounded-2xl overflow-hidden glass card-shadow hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  width={768}
                  height={520}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.14_0.08_285)] to-transparent opacity-70" />
                <span className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent/15 backdrop-blur-sm rounded-full px-3 py-1">
                  {item.tag}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-base leading-snug">{item.name}</h3>
                  <span className="text-sm font-bold text-gradient whitespace-nowrap">{item.price}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                <a
                  href="#marketplace"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-[oklch(0.75_0.28_330)] transition"
                >
                  Ver en marketplace <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {CAROUSEL_ITEMS.map((_, idx) => (
            <span
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === active ? "w-6 bg-gradient-brand" : "w-1.5 bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
