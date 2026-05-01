import { Link } from "react-router-dom";
import { Button } from "@/shared/ui/button";
import { MapPin, Clock } from "lucide-react";

export function VisitCTA() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-24">
      <div className="rounded-2xl bg-primary p-12 text-on-primary md:p-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
              Visit us today
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/90">
              Step into any of our three locations and experience coffee culture done right. Fresh pastries daily, beans roasted on-site.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="font-medium">Flagship Roastery</div>
                <div className="text-sm text-white/80">42 Bean Street, Arts District</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="font-medium">Open Daily</div>
                <div className="text-sm text-white/80">7:00 AM – 7:00 PM</div>
              </div>
            </div>

            <div className="pt-2">
              <Link to="/locations">
                <Button
                  variant="secondary"
                  className="bg-canvas text-ink hover:bg-surface-soft border-0"
                >
                  All Locations
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
