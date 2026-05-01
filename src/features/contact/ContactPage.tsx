import { useState } from "react";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Mail, MapPin, Phone } from "lucide-react";

export function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h1 className="font-serif text-4xl tracking-tight text-ink md:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-body">
              Questions about wholesale, events, or just want to say hello? We'd love to hear from you.
            </p>

            <div className="mt-10 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-soft">
                  <Mail className="h-5 w-5 text-muted" />
                </div>
                <div>
                  <div className="text-sm text-muted">Email</div>
                  <div className="text-ink">hello@lamoon.coffee</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-soft">
                  <Phone className="h-5 w-5 text-muted" />
                </div>
                <div>
                  <div className="text-sm text-muted">Phone</div>
                  <div className="text-ink">(555) 123-4567</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-soft">
                  <MapPin className="h-5 w-5 text-muted" />
                </div>
                <div>
                  <div className="text-sm text-muted">Roastery</div>
                  <div className="text-ink">42 Bean Street, Arts District</div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-hairline bg-surface-card p-8">
            {sent ? (
              <div className="py-12 text-center">
                <h3 className="font-serif text-2xl tracking-tight text-ink">Message Sent</h3>
                <p className="mt-2 text-body">Thank you for reaching out. We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-ink">Name</label>
                  <Input required placeholder="Your name" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-ink">Email</label>
                  <Input required type="email" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-ink">Message</label>
                  <textarea
                    required
                    rows={4}
                    className="flex w-full rounded-md border border-hairline bg-canvas px-3.5 py-2 text-base text-ink placeholder:text-muted-soft focus-visible:border-primary focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/15"
                    placeholder="How can we help?"
                  />
                </div>
                <Button type="submit" className="mt-2 w-full">
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
