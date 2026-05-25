import pickup from "@/assets/service-pickup.jpg";
import wash from "@/assets/service-wash.jpg";
import dye from "@/assets/service-dye.jpg";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    img: pickup,
    title: "Recogida y entrega a domicilio",
    desc: "Pasamos por tus prendas, las cuidamos como si fueran nuestras y te las devolvemos limpias, frescas y listas para usar.",
  },
  {
    img: wash,
    title: "Lavado profesional",
    desc: "Lavado cuidadoso para ropa diaria, prendas delicadas, ropa de cama y textiles del hogar, protegiendo colores, fibras y textura.",
  },
  {
    img: dye,
    title: "Tinturado de prendas",
    desc: "Renovamos el color de tus prendas favoritas con tinturados pensados para devolverles vida, estilo y personalidad.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-20 md:py-28 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-accent uppercase tracking-wider">Servicios</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold">Lavamos, cuidamos y <span className="text-gradient">renovamos</span> tus prendas</h2>
          </div>
          <a href="#marketplace" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            Explorar marketplace <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <article key={s.title} className="group glass rounded-3xl overflow-hidden card-shadow hover:-translate-y-1 transition-all">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={s.img} alt={s.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-night/80 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <a href="#marketplace" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all">
                  Solicitar servicio <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
