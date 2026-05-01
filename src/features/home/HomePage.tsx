import { HeroBand } from "./components/HeroBand";
import { FeaturedDrinks } from "./components/FeaturedDrinks";
import { StoryPreview } from "./components/StoryPreview";
import { MenuPreview } from "./components/MenuPreview";
import { VisitCTA } from "./components/VisitCTA";
import { Testimonials } from "./components/Testimonials";

export function HomePage() {
  return (
    <main>
      <HeroBand />
      <FeaturedDrinks />
      <StoryPreview />
      <MenuPreview />
      <VisitCTA />
      <Testimonials />
    </main>
  );
}
