import logo from "@/assets/logo-purpura.png";
import hero from "@/assets/hero-laundry.jpg";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="inicio" className="relative pt-28 md:pt-36 pb-16 md:pb-24 bg-hero overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-gradient-brand opacity-20 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative">
        <div className="animate-float-up">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground mb-6">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Limpieza profesional con el toque Púrpura
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
            Tu ropa <span className="text-gradient">limpia, fresca</span> y lista cuando la necesitas
          </h1>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl">
            En Lavandería Púrpura cuidamos tus prendas con procesos profesionales de lavado, recogida a domicilio, entrega rápida y servicios especializados de tinturado.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#marketplace" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 h-12 text-sm font-semibold text-white glow hover:scale-[1.02] transition">
              Agendar recogida <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#servicios" className="inline-flex items-center gap-2 rounded-full glass px-6 h-12 text-sm font-semibold hover:bg-white/5 transition">
              Ver servicios
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
            <Metric value="+5.000" label="prendas cuidadas" />
            <div className="h-8 w-px bg-white/10" />
            <Metric value="24h" label="entrega express" />
            <div className="h-8 w-px bg-white/10" />
            <Metric value="4.9★" label="clientes felices" />
          </div>
        </div>

        <div className="relative animate-float-up" style={{ animationDelay: "150ms" }}>
          <div className="relative rounded-3xl overflow-hidden card-shadow ring-1 ring-white/10">
            <img src={hero} alt="Ropa fresca y doblada con tonos morados" width={1536} height={1024} className="w-full h-[420px] md:h-[520px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-night/60 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 glass rounded-2xl p-4 flex items-center gap-3">
              <img src={logo} alt="" className="h-12 w-12 rounded-full" />
              <div>
                <p className="text-sm font-semibold">Lavandería Púrpura</p>
                <p className="text-xs text-muted-foreground">Recogemos, lavamos y entregamos por ti.</p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 hidden md:block glass rounded-2xl p-4 w-56 card-shadow">
            <p className="text-xs text-muted-foreground">Próxima recogida</p>
            <p className="text-sm font-semibold mt-1">Hoy · 4:00 PM</p>
            <div className="mt-2 h-2 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full w-3/4 bg-gradient-brand animate-pulse-glow rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-lg font-bold text-foreground">{value}</p>
      <p>{label}</p>
    </div>
  );
}
