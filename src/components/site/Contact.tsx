import { PHONE_DISPLAY, MAPS_URL, waLink, WA_PHONE } from "@/lib/site-data";
import { Phone, MapPin, MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <section id="contacto" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-3xl p-8 md:p-14 card-shadow relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-gradient-brand opacity-25 blur-3xl" />
          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium text-accent uppercase tracking-wider">Contáctanos</p>
              <h2 className="mt-3 text-3xl md:text-5xl font-extrabold">
                Tu ropa, en <span className="text-gradient">buenas manos</span>
              </h2>
              <p className="mt-5 text-muted-foreground text-base md:text-lg">
                Estamos listos para cuidar tus prendas. Agenda tu servicio, consulta nuestros productos o visítanos.
              </p>

              <div className="mt-8 space-y-4">
                <InfoRow icon={Phone} label="Teléfono" value={PHONE_DISPLAY} href={`tel:+${WA_PHONE}`} />
                <InfoRow icon={MapPin} label="Ubicación" value="Abrir en Google Maps" href={MAPS_URL} external />
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href={`tel:+${WA_PHONE}`} className="inline-flex items-center gap-2 rounded-full bg-gradient-brand h-12 px-6 text-sm font-semibold text-white glow hover:opacity-90 transition">
                  <Phone className="h-4 w-4" /> Llamar ahora
                </a>
                <a href={MAPS_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full glass h-12 px-6 text-sm font-semibold hover:bg-white/5 transition">
                  <MapPin className="h-4 w-4" /> Abrir ubicación
                </a>
                <a href={waLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] h-12 px-6 text-sm font-semibold text-white hover:opacity-90 transition">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </div>

            <div className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden ring-1 ring-white/10">
              <iframe
                title="Ubicación Lavandería Púrpura"
                src="https://www.google.com/maps?q=Bogot%C3%A1&output=embed"
                className="w-full h-full grayscale-[30%]"
                loading="lazy"
              />
              <a href={MAPS_URL} target="_blank" rel="noreferrer" className="absolute inset-0" aria-label="Abrir mapa" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon: Icon, label, value, href, external }: { icon: typeof Phone; label: string; value: string; href: string; external?: boolean }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="flex items-center gap-4 p-4 rounded-2xl glass hover:bg-white/5 transition"
    >
      <div className="h-11 w-11 grid place-items-center rounded-xl bg-gradient-brand">
        <Icon className="h-4 w-4 text-white" />
      </div>
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="font-semibold">{value}</p>
      </div>
    </a>
  );
}
