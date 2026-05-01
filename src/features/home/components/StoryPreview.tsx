import { Link } from "react-router-dom";
import { Button } from "@/shared/ui/button";
import { ArrowRight } from "lucide-react";

export function StoryPreview() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-24">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-surface-soft">
            <img
              src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80"
              alt="Coffee roasting process"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="order-1 flex flex-col gap-6 md:order-2">
          <h2 className="font-serif text-3xl tracking-tight text-ink md:text-4xl">
            Roasted in small batches, served with care
          </h2>
          <p className="text-lg leading-relaxed text-body">
            We source directly from farmers who share our obsession with quality. Our roastery operates in micro-lots, ensuring every bean reaches its full potential.
          </p>
          <p className="text-body">
            What started as a weekend hobby in a garage has grown into three cafés — but the philosophy remains the same: respect the bean, honor the craft, and never compromise on freshness.
          </p>
          <div>
            <Link to="/about">
              <Button variant="secondary" className="gap-2">
                Read our story <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
