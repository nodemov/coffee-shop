import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, Menu, X } from "lucide-react";
import { Button } from "@/shared/ui/button";
import { useCart } from "@/shared/hooks/useCart";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Menu", path: "/menu" },
  { label: "Our Story", path: "/about" },
  { label: "Locations", path: "/locations" },
  { label: "Contact", path: "/contact" },
];

export function TopNav() {
  const { totalItems } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="sticky top-0 z-50 h-16 border-b border-hairline bg-canvas/95 backdrop-blur-sm">
        <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl tracking-tight text-ink">Lamoon</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-ink"
                    : "text-muted hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/cart">
              <Button variant="icon" size="icon" className="relative">
                <ShoppingBag className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-on-primary">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>

            <Button
              variant="icon"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile menu — rendered outside header so fixed positioning is relative to viewport */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-canvas md:hidden">
          <div className="flex h-16 items-center justify-between px-6 border-b border-hairline">
            <span className="font-serif text-2xl tracking-tight text-ink">Lamoon</span>
            <Button variant="icon" size="icon" onClick={() => setMobileOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          <nav className="flex flex-col gap-2 px-6 pt-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`py-3 text-lg font-medium ${
                  location.pathname === link.path ? "text-ink" : "text-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/cart" onClick={() => setMobileOpen(false)} className="py-3 text-lg font-medium text-muted">
              Cart {totalItems > 0 && `(${totalItems})`}
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
