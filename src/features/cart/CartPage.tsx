import { useState } from "react";
import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { useCart } from "@/shared/hooks/useCart";

export function CartPage() {
  const { items, removeItem, updateQuantity, totalItems, totalPrice, clearCart } = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
    clearCart();
  };

  if (submitted) {
    return (
      <main className="min-h-screen">
        <div className="mx-auto max-w-[600px] px-6 py-24 text-center">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-success/10 text-success">
            <ShoppingBag className="h-8 w-8" />
          </div>
          <h1 className="font-serif text-3xl tracking-tight text-ink">Order Confirmed</h1>
          <p className="mt-4 text-body">
            Thank you, {name}! Your order has been received. We'll have it ready for pickup at {pickupTime || "the earliest available time"}.
          </p>
          <div className="mt-8">
            <Link to="/menu">
              <Button>Back to Menu</Button>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  if (items.length === 0) {
    return (
      <main className="min-h-screen">
        <div className="mx-auto max-w-[600px] px-6 py-24 text-center">
          <ShoppingBag className="mx-auto mb-4 h-12 w-12 text-muted-soft" />
          <h1 className="font-serif text-3xl tracking-tight text-ink">Your cart is empty</h1>
          <p className="mt-4 text-body">Browse our menu and add your favorite drinks and pastries.</p>
          <div className="mt-8">
            <Link to="/menu">
              <Button className="gap-2">
                Browse Menu <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <h1 className="mb-10 font-serif text-4xl tracking-tight text-ink">Your Cart</h1>

        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="flex flex-col gap-4">
              {items.map((item) => (
                <div
                  key={`${item.productId}-${item.size ?? ""}-${JSON.stringify(item.options)}`}
                  className="flex items-center gap-4 rounded-xl border border-hairline bg-canvas p-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-16 w-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <div className="font-medium text-ink">{item.name}</div>
                    <div className="text-sm text-muted">
                      {item.size && `${item.size} `}
                      {item.options && Object.entries(item.options).map(([k, v]) => `${k}: ${v}`).join(", ")}
                    </div>
                    <div className="mt-1 font-mono text-sm text-primary">
                      ${item.price.toFixed(2)}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      variant="icon"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-6 text-center text-sm">{item.quantity}</span>
                    <Button
                      variant="icon"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-muted hover:text-error"
                    onClick={() => removeItem(item.productId)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between">
              <Button variant="ghost" onClick={clearCart}>
                Clear Cart
              </Button>
              <div className="text-right">
                <div className="text-sm text-muted">{totalItems} items</div>
                <div className="font-mono text-xl text-ink">${totalPrice.toFixed(2)}</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-xl border border-hairline bg-surface-card p-8">
              <h2 className="mb-6 font-serif text-2xl tracking-tight">Checkout</h2>
              <form onSubmit={handleCheckout} className="flex flex-col gap-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-ink">Name</label>
                  <Input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-ink">Phone</label>
                  <Input
                    required
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(555) 000-0000"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-ink">Pickup Time</label>
                  <Input
                    type="time"
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-ink">Notes</label>
                  <Input
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Any special requests?"
                  />
                </div>

                <div className="mt-2 border-t border-hairline pt-4">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-muted">Total</span>
                    <span className="font-mono text-xl text-ink">${totalPrice.toFixed(2)}</span>
                  </div>
                  <Button type="submit" className="w-full">
                    Place Order
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
