const testimonials = [
  {
    quote: "The flat white here changed my standard for what coffee should taste like. You can tell they actually care about the beans.",
    author: "Sarah Chen",
    role: "Regular since 2022",
  },
  {
    quote: "I buy my beans here every week. The single-origin rotation keeps things exciting, and the staff always remembers my order.",
    author: "Marcus Webb",
    role: "Home brewer",
  },
  {
    quote: "Finally, a café that takes pastries as seriously as coffee. The almond croissant paired with their house blend is perfection.",
    author: "Aisha Patel",
    role: "Food writer",
  },
];

export function Testimonials() {
  return (
    <section className="bg-surface-soft py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="mb-12 text-center font-serif text-3xl tracking-tight text-ink md:text-4xl">
          What our guests say
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.author} className="rounded-xl bg-canvas p-8">
              <p className="text-lg leading-relaxed text-body-strong">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-card font-serif text-sm text-ink">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-medium text-ink">{t.author}</div>
                  <div className="text-xs text-muted">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
