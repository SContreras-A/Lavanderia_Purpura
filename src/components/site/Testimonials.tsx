import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Mariana Gómez",
    role: "Cliente habitual",
    text: "Llevo más de un año usando Lavandería Púrpura y la verdad es que no puedo estar más feliz. Mi ropa siempre huele increíble y el servicio a domicilio me ha salvado en las semanas más ocupadas.",
    rating: 5,
  },
  {
    id: 2,
    name: "Carlos Ruiz",
    role: "Dueño de restaurante",
    text: "Teníamos un problema serio con las mantelerías. Desde que contratamos el plan mensual, todo cambió. Llegan puntuales, recogen y entregan sin complicaciones. Recomendadísimos.",
    rating: 5,
  },
  {
    id: 3,
    name: "Daniela Torres",
    role: "Madre de familia",
    text: "El plan familiar es lo mejor que hemos contratado. Con tres niños en casa, el laundry se acumulaba. Ahora pasan, recogen y entregan todo perfecto. ¡Una bendición!",
    rating: 5,
  },
  {
    id: 4,
    name: "Andrés Méndez",
    role: "Estudiante",
    text: "El lavado por kilo es perfecto para mi presupuesto. Rápido, económico y siempre queda impecable. Además el tinturado de mi chaqueta quedó como nueva.",
    rating: 4,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "text-[#f0d78c] fill-[#f0d78c]" : "text-white/20"
          }`}
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonios" className="py-20 md:py-28 relative">
      <div className="absolute inset-1/2 -z-10 translate-x-[-50%] translate-y-[-50%] w-[600px] h-[600px] rounded-full bg-brand-purple/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-medium text-accent uppercase tracking-wider">Testimonios</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold">
            Lo que dicen <span className="text-gradient">nuestros clientes</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            La confianza se gana con resultados. Esto es lo que opinan quienes ya confían en nosotros.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TESTIMONIALS.map((t) => (
            <article
              key={t.id}
              className="glass rounded-2xl p-6 card-shadow hover:-translate-y-1 hover:border-accent/30 transition-all duration-300 flex flex-col"
            >
              <Quote className="h-6 w-6 text-accent/60" />
              <p className="mt-4 text-sm leading-relaxed text-foreground/90 flex-1">
                "{t.text}"
              </p>
              <div className="mt-6 pt-5 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-brand grid place-items-center text-sm font-bold text-white">
                    {t.name.charAt(1)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
                <div className="mt-3">
                  <StarRating rating={t.rating} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
