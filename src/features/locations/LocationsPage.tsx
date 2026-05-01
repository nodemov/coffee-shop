import { MapPin, Clock, Phone } from "lucide-react";

const locations = [
  {
    name: "Flagship Roastery",
    address: "42 Bean Street, Arts District",
    phone: "(555) 123-4567",
    hours: "Mon–Sun: 7:00 AM – 7:00 PM",
    description: "Our original location with the roastery in back. Watch beans roast while you sip.",
  },
  {
    name: "Downtown Kiosk",
    address: "100 Main Plaza, Suite 12",
    phone: "(555) 234-5678",
    hours: "Mon–Fri: 6:30 AM – 5:00 PM",
    description: "Fast, precise espresso for the morning commute. Grab-and-go pastries.",
  },
  {
    name: "Westside Lounge",
    address: "88 Oak Boulevard",
    phone: "(555) 345-6789",
    hours: "Mon–Sun: 8:00 AM – 9:00 PM",
    description: "Spacious seating, wifi, and a curated selection of magazines. Stay a while.",
  },
];

export function LocationsPage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="mb-12">
          <h1 className="font-serif text-4xl tracking-tight text-ink md:text-5xl">
            Locations
          </h1>
          <p className="mt-4 max-w-lg text-body">
            Three spaces, one philosophy. Find the Lamoon experience that fits your day.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {locations.map((loc) => (
            <div
              key={loc.name}
              className="flex flex-col rounded-xl border border-hairline bg-canvas p-8"
            >
              <h3 className="font-serif text-xl tracking-tight text-ink">{loc.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{loc.description}</p>

              <div className="mt-6 flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-muted" />
                  <span className="text-sm text-body">{loc.address}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-muted" />
                  <span className="text-sm text-body">{loc.hours}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-muted" />
                  <span className="text-sm text-body">{loc.phone}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
