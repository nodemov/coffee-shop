export function AboutPage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-serif text-4xl tracking-tight text-ink md:text-5xl">
            Our Story
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-body">
            Lamoon began in a small garage in 2018, with a second-hand roaster, a borrowed scale, and an obsession with Ethiopian beans. What started as weekend experiments for friends quickly became something larger — a community of people who believe that coffee deserves the same care as any craft.
          </p>

          <div className="my-12 aspect-[16/9] overflow-hidden rounded-2xl bg-surface-soft">
            <img
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1200&q=80"
              alt="Coffee roasting"
              className="h-full w-full object-cover"
            />
          </div>

          <h2 className="font-serif text-2xl tracking-tight text-ink">
            Direct trade, transparent pricing
          </h2>
          <p className="mt-4 text-base leading-relaxed text-body">
            We travel to origin every year, building relationships with farmers who share our standards. No middlemen, no mystery. When you drink a cup of Lamoon coffee, you know exactly where it came from and who grew it.
          </p>

          <h2 className="mt-12 font-serif text-2xl tracking-tight text-ink">
            Small batch roasting
          </h2>
          <p className="mt-4 text-base leading-relaxed text-body">
            Our roastery runs in 12kg batches, profiled individually for each lot. We roast daily, which means the coffee in your cup was likely roasted within the last 48 hours. Freshness isn't a marketing claim here — it's a logistical commitment.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { number: "3", label: "Locations" },
              { number: "12", label: "Origin Countries" },
              { number: "48hrs", label: "Roast to Cup" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl bg-surface-card p-6 text-center">
                <div className="font-serif text-3xl tracking-tight text-primary">{stat.number}</div>
                <div className="mt-1 text-sm text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
