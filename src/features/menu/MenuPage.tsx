import { useState, useMemo } from "react";
import { products } from "./data/products";
import { CategoryTabs } from "./components/CategoryTabs";
import { ProductCard } from "./components/ProductCard";
import type { CategoryTab } from "@/shared/types";

export function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryTab>("all");

  const filtered = useMemo(() => {
    if (activeCategory === "all") return products;
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="mb-10">
          <h1 className="font-serif text-4xl tracking-tight text-ink md:text-5xl">
            Menu
          </h1>
          <p className="mt-4 max-w-lg text-body">
            Freshly brewed coffee, artisanal pastries, and beans roasted in small batches. Order online for pickup.
          </p>
        </div>

        <div className="mb-8">
          <CategoryTabs active={activeCategory} onChange={setActiveCategory} />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
