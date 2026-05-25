import { Shield, Clock, HeartHandshake } from "lucide-react";

const values = [
  { icon: Shield, title: "Cuidado profesional de prendas", desc: "Procesos pensados para proteger colores, fibras y texturas en cada lavado." },
  { icon: Clock, title: "Puntualidad y confianza", desc: "Recogemos y entregamos cuando lo prometemos. Sin excusas, sin esperas." },
  { icon: HeartHandshake, title: "Servicio cercano y práctico", desc: "Atención humana, fácil de agendar y pensada para tu día a día." },
];

export function About() {
  return (
    <section id="sobre" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-accent uppercase tracking-wider">Sobre nosotros</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold">
            Sobre <span className="text-gradient">Lavandería Púrpura</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-base md:text-lg leading-relaxed">
            Somos una lavandería pensada para hacerte la vida más fácil. Combinamos cuidado textil, atención personalizada y procesos eficientes para que tus prendas reciban el tratamiento que merecen. Nos encargamos de lavar, recoger, entregar y renovar tu ropa con calidad, puntualidad y mucho detalle.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((v) => (
            <div key={v.title} className="group glass rounded-2xl p-6 card-shadow hover:-translate-y-1 hover:border-accent/40 transition-all">
              <div className="h-12 w-12 rounded-xl bg-gradient-brand grid place-items-center glow">
                <v.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-5 font-semibold text-lg">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
