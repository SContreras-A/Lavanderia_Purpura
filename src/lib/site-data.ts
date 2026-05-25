export const WA_PHONE = "573144458001";
export const PHONE_DISPLAY = "+57 314 4458001";
export const MAPS_URL = "https://maps.app.goo.gl/m6KZkHrJZBcZbt2J9";
export const DEFAULT_WA_MSG = "Hola, Lavandería Púrpura. Quiero agendar un servicio de lavandería.";

export const waLink = (msg: string = DEFAULT_WA_MSG) =>
  `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(msg)}`;

export type Product = {
  id: string;
  name: string;
  desc: string;
  price: string;
  category: "Lavado" | "Domicilio" | "Tinturado" | "Planes";
};

export const PRODUCTS: Product[] = [
  { id: "kilo", name: "Lavado por kilo", desc: "Lavado completo de tu ropa diaria, cobrado por peso.", price: "$6.500/kg", category: "Lavado" },
  { id: "delicada", name: "Lavado de prendas delicadas", desc: "Cuidado especial para seda, lana y prendas finas.", price: "Desde $12.000", category: "Lavado" },
  { id: "cobijas", name: "Lavado de cobijas", desc: "Cobijas y edredones limpios, esponjosos y bien secados.", price: "Desde $18.000", category: "Lavado" },
  { id: "cama", name: "Lavado de ropa de cama", desc: "Sábanas, fundas y cubrelechos con un toque fresco.", price: "Desde $15.000", category: "Lavado" },
  { id: "tinturado", name: "Tinturado básico", desc: "Renovamos el color de tus prendas favoritas.", price: "Consultar", category: "Tinturado" },
  { id: "express", name: "Servicio express", desc: "Tu ropa lista en menos de 24 horas.", price: "+30% sobre tarifa", category: "Lavado" },
  { id: "domicilio", name: "Recogida y entrega a domicilio", desc: "Pasamos por tu ropa y te la entregamos lista.", price: "Gratis desde $40.000", category: "Domicilio" },
  { id: "plan", name: "Plan mensual familiar", desc: "Lavado, recogida y entrega ilimitada para toda la familia.", price: "$189.000/mes", category: "Planes" },
];
