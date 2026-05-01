import { useState } from "react";
import { Plus, Check } from "lucide-react";
import { Button } from "@/shared/ui/button";
import { Badge } from "@/shared/ui/badge";
import { useCart } from "@/shared/hooks/useCart";
import type { Product } from "@/shared/types";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState(
    product.sizes ? product.sizes[0].size : undefined
  );
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [added, setAdded] = useState(false);

  const currentPrice =
    product.sizes && selectedSize
      ? product.sizes.find((s) => s.size === selectedSize)?.price ?? product.price
      : product.price;

  const handleAdd = () => {
    addItem({
      productId: product.id,
      name: product.name,
      price: currentPrice,
      quantity: 1,
      size: selectedSize,
      options: Object.keys(selectedOptions).length > 0 ? selectedOptions : undefined,
      image: product.image,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="flex flex-col overflow-hidden rounded-xl bg-canvas border border-hairline">
      <div className="aspect-[4/3] overflow-hidden relative">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
        />
        {product.badge && (
          <div className="absolute top-3 left-3">
            <Badge variant="coral">{product.badge}</Badge>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 flex items-baseline justify-between">
          <h3 className="font-serif text-xl tracking-tight text-ink">{product.name}</h3>
          <span className="font-mono text-lg text-primary">${currentPrice.toFixed(2)}</span>
        </div>

        <p className="mb-4 text-sm leading-relaxed text-muted">{product.description}</p>

        {product.sizes && (
          <div className="mb-3 flex flex-wrap gap-2">
            {product.sizes.map((s) => (
              <button
                key={s.size}
                onClick={() => setSelectedSize(s.size)}
                className={`rounded-md px-3 py-1 text-xs font-medium transition-colors ${
                  selectedSize === s.size
                    ? "bg-surface-dark text-on-dark"
                    : "bg-surface-soft text-body hover:bg-surface-card"
                }`}
              >
                {s.size}
              </button>
            ))}
          </div>
        )}

        {product.options?.map((opt) => (
          <div key={opt.name} className="mb-3">
            <div className="mb-1 text-xs font-medium text-muted">{opt.name}</div>
            <div className="flex flex-wrap gap-2">
              {opt.choices.map((choice) => (
                <button
                  key={choice}
                  onClick={() =>
                    setSelectedOptions((prev) => ({ ...prev, [opt.name]: choice }))
                  }
                  className={`rounded-md px-3 py-1 text-xs font-medium transition-colors ${
                    selectedOptions[opt.name] === choice
                      ? "bg-surface-dark text-on-dark"
                      : "bg-surface-soft text-body hover:bg-surface-card"
                  }`}
                >
                  {choice}
                </button>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-auto pt-4">
          <Button
            onClick={handleAdd}
            className="w-full gap-2"
            variant={added ? "secondary" : "primary"}
          >
            {added ? (
              <>
                <Check className="h-4 w-4" /> Added
              </>
            ) : (
              <>
                <Plus className="h-4 w-4" /> Add to Cart
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
