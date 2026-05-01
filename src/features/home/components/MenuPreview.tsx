import { Link } from "react-router-dom";
import { Button } from "@/shared/ui/button";

const highlights = [
  {
    name: "Caramel Latte",
    price: "$5.50",
    description: "Double shot espresso with house-made caramel",
  },
  {
    name: "Oat Flat White",
    price: "$5.00",
    description: "Silky oat milk over ristretto shots",
  },
  {
    name: "Cold Brew Tonic",
    price: "$6.00",
    description: "24-hour steeped cold brew with tonic water",
  },
];

export function MenuPreview() {
  return (
    <section className="bg-surface-dark py-24 text-on-dark">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl tracking-tight text-on-dark md:text-4xl">
            Menu favorites
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-on-dark-soft">
            Hand-picked highlights from our current menu. Updated weekly as seasonal beans rotate.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.name}
              className="rounded-xl bg-surface-dark-elevated p-8 transition-colors hover:bg-surface-dark-soft"
            >
              <div className="mb-4 flex items-baseline justify-between">
                <h3 className="font-serif text-xl text-on-dark">{item.name}</h3>
                <span className="font-mono text-lg text-accent-teal">{item.price}</span>
              </div>
              <p className="text-sm leading-relaxed text-on-dark-soft">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/menu">
            <Button variant="secondary-dark" className="gap-2">
              Browse full menu
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
