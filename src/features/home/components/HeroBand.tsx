import { Link } from "react-router-dom";
import { Button } from "@/shared/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroBand() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-24 md:py-32">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <h1 className="font-serif text-4xl leading-[1.05] tracking-tight text-ink md:text-5xl lg:text-[64px]">
            Where every cup tells a story
          </h1>
          <p className="max-w-md text-lg leading-relaxed text-body">
            Single-origin beans, carefully roasted in small batches. Experience coffee the way it was meant to be — warm, intentional, and unforgettable.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link to="/menu">
              <Button className="gap-2">
                Order Now <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="secondary">Our Story</Button>
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-surface-soft">
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80"
              alt="Coffee shop atmosphere"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 hidden rounded-xl bg-surface-dark p-4 text-on-dark shadow-lg md:block">
            <div className="font-mono text-xs text-on-dark-soft">Today's Roast</div>
            <div className="font-serif text-lg">Ethiopia Yirgacheffe</div>
          </div>
        </div>
      </div>
    </section>
  );
}
