import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import pickup from "@/assets/service-pickup.jpg";
import wash from "@/assets/service-wash.jpg";
import dye from "@/assets/service-dye.jpg";
import hero from "@/assets/hero-laundry.jpg";

const items = [
  { src: g1, alt: "Prendas limpias y organizadas" },
  { src: g2, alt: "Ropa de cama doblada" },
  { src: hero, alt: "Pila de ropa fresca" },
  { src: wash, alt: "Lavadoras profesionales" },
  { src: g3, alt: "Atención personalizada al doblar prendas" },
  { src: dye, alt: "Prenda tinturada con color renovado" },
  { src: pickup, alt: "Servicio de recogida a domicilio" },
  { src: g4, alt: "Instalaciones modernas de la lavandería" },
];

export function Gallery() {
  return (
    <section id="galeria" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-accent uppercase tracking-wider">Galería</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold">El <span className="text-gradient">toque Púrpura</span> en cada detalle</h2>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {items.map((it, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl group ring-1 ring-white/10 ${
                i === 0 || i === 5 ? "row-span-2 aspect-[3/4] md:aspect-auto" : "aspect-square"
              }`}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-night/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
              <p className="absolute bottom-3 left-3 right-3 text-xs text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                {it.alt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
