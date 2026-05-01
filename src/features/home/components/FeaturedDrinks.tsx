import { Link } from "react-router-dom";
import { Card, CardContent, CardTitle, CardDescription } from "@/shared/ui/card";
import { Badge } from "@/shared/ui/badge";

const drinks = [
  {
    title: "Single Origin",
    description: "Traceable beans from one farm or cooperative. Taste the terroir in every sip.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=80",
    badge: "Popular",
  },
  {
    title: "House Blend",
    description: "Our signature balance of chocolate, caramel, and bright citrus notes.",
    image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=600&q=80",
  },
  {
    title: "Seasonal Special",
    description: "Limited releases celebrating harvest seasons from around the world.",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
    badge: "New",
  },
];

export function FeaturedDrinks() {
  return (
    <section className="bg-surface-soft py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl tracking-tight text-ink md:text-4xl">
            Crafted with intention
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-body">
            From seed to cup, every step is designed to honor the bean and the hands that grew it.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {drinks.map((drink) => (
            <Card key={drink.title} className="overflow-hidden p-0">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={drink.image}
                  alt={drink.title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="p-8">
                <div className="mb-3 flex items-center gap-2">
                  <CardTitle className="text-xl">{drink.title}</CardTitle>
                  {drink.badge && <Badge variant="coral">{drink.badge}</Badge>}
                </div>
                <CardDescription>{drink.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/menu" className="text-sm font-medium text-primary underline-offset-4 hover:underline">
            View full menu
          </Link>
        </div>
      </div>
    </section>
  );
}
