import { PRODUCTS, waLink } from "@/lib/site-data";
import { X, Minus, Plus, MessageCircle, ShoppingBag } from "lucide-react";
import { useEffect } from "react";

export type CartItem = { id: string; qty: number };

export function CartDrawer({
  open,
  onClose,
  items,
  setItems,
}: {
  open: boolean;
  onClose: () => void;
  items: CartItem[];
  setItems: (fn: (prev: CartItem[]) => CartItem[]) => void;
}) {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const detailed = items
    .map((i) => ({ ...i, product: PRODUCTS.find((p) => p.id === i.id)! }))
    .filter((i) => i.product);

  const parsePrice = (s: string) => {
    const m = s.replace(/\./g, "").match(/(\d+)/);
    return m ? parseInt(m[1], 10) : 0;
  };
  const subtotal = detailed.reduce((acc, i) => acc + parsePrice(i.product.price) * i.qty, 0);

  const inc = (id: string) => setItems((prev) => prev.map((p) => p.id === id ? { ...p, qty: p.qty + 1 } : p));
  const dec = (id: string) => setItems((prev) => prev.flatMap((p) => p.id === id ? (p.qty > 1 ? [{ ...p, qty: p.qty - 1 }] : []) : [p]));
  const remove = (id: string) => setItems((prev) => prev.filter((p) => p.id !== id));

  const message = () => {
    const lines = [
      "Hola Lavandería Púrpura, quiero solicitar:",
      "",
      ...detailed.map((i) => `• ${i.product.name} x${i.qty} — ${i.product.price}`),
      "",
      subtotal > 0 ? `Subtotal estimado: $${subtotal.toLocaleString("es-CO")}` : "",
      "¿Me ayudan a agendar la recogida?",
    ].filter(Boolean);
    return lines.join("\n");
  };

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      />
      <aside
        className={`fixed top-0 right-0 z-[70] h-full w-full sm:w-[420px] glass border-l border-white/10 flex flex-col transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-4 w-4 text-accent" />
            <h3 className="font-semibold">Tu carrito</h3>
          </div>
          <button onClick={onClose} aria-label="Cerrar" className="h-9 w-9 grid place-items-center rounded-full hover:bg-white/5">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-3">
          {detailed.length === 0 && (
            <div className="text-center py-20 text-sm text-muted-foreground">
              Tu carrito está vacío.<br />Explora el marketplace para empezar.
            </div>
          )}
          {detailed.map((i) => (
            <div key={i.id} className="rounded-2xl border border-white/10 p-4 bg-white/[0.02]">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs text-accent">{i.product.category}</p>
                  <p className="font-semibold text-sm">{i.product.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{i.product.price}</p>
                </div>
                <button onClick={() => remove(i.id)} className="text-muted-foreground hover:text-foreground text-xs">
                  Quitar
                </button>
              </div>
              <div className="mt-3 inline-flex items-center gap-1 rounded-full border border-white/10 p-1">
                <button onClick={() => dec(i.id)} aria-label="Disminuir" className="h-7 w-7 grid place-items-center rounded-full hover:bg-white/5">
                  <Minus className="h-3 w-3" />
                </button>
                <span className="w-6 text-center text-sm font-semibold">{i.qty}</span>
                <button onClick={() => inc(i.id)} aria-label="Aumentar" className="h-7 w-7 grid place-items-center rounded-full hover:bg-white/5">
                  <Plus className="h-3 w-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 p-5 space-y-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Subtotal estimado</span>
            <span className="font-bold text-lg text-gradient">
              {subtotal > 0 ? `$${subtotal.toLocaleString("es-CO")}` : "Consultar"}
            </span>
          </div>
          <a
            href={detailed.length ? waLink(message()) : waLink()}
            target="_blank"
            rel="noreferrer"
            className={`w-full inline-flex items-center justify-center gap-2 rounded-full h-12 text-sm font-semibold text-white transition ${detailed.length ? "bg-[#25D366] hover:opacity-90" : "bg-white/10 text-muted-foreground pointer-events-none"}`}
          >
            <MessageCircle className="h-4 w-4" />
            Finalizar pedido por WhatsApp
          </a>
          <p className="text-[11px] text-muted-foreground text-center">
            Confirmaremos disponibilidad, recogida y total final por WhatsApp.
          </p>
        </div>
      </aside>
    </>
  );
}
