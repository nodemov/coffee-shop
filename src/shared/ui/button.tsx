import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/shared/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-on-primary hover:bg-primary-active active:bg-primary-active h-10 px-5 rounded-md",
        secondary:
          "bg-canvas text-ink border border-hairline hover:bg-surface-soft active:bg-surface-soft h-10 px-5 rounded-md",
        "secondary-dark":
          "bg-surface-dark-elevated text-on-dark hover:bg-surface-dark-soft active:bg-surface-dark-soft h-10 px-5 rounded-md",
        ghost:
          "hover:bg-surface-soft text-ink h-10 px-3",
        link:
          "text-primary underline-offset-4 hover:underline h-auto px-0",
        icon:
          "h-9 w-9 rounded-full border border-hairline bg-canvas text-ink hover:bg-surface-soft",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
