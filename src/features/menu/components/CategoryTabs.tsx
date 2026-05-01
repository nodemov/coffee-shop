import { cn } from "@/shared/lib/utils";
import type { CategoryTab } from "@/shared/types";

const tabs: { label: string; value: CategoryTab }[] = [
  { label: "All", value: "all" },
  { label: "Coffee", value: "coffee" },
  { label: "Tea", value: "tea" },
  { label: "Pastry", value: "pastry" },
  { label: "Beans", value: "beans" },
];

interface CategoryTabsProps {
  active: CategoryTab;
  onChange: (tab: CategoryTab) => void;
}

export function CategoryTabs({ active, onChange }: CategoryTabsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onChange(tab.value)}
          className={cn(
            "rounded-md px-4 py-2 text-sm font-medium transition-colors",
            active === tab.value
              ? "bg-surface-card text-ink"
              : "bg-transparent text-muted hover:text-ink"
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
