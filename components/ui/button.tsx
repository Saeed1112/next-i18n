import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import Indicator from "@/components/Indicator";

const buttonVariants = cva(
  "inline-flex relative items-center justify-center select-none rounded-md text-sm font-medium transition-colors focus-visible:outline-none" +
    " focus-visible:ring-1" +
    " focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground  hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
      isLoading: {
        default: "pointer-events-none",
        loading: "pointer-events-auto",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      isLoading: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      loading,
      isLoading,
      variant,
      size,
      asChild = false,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    const loadingClassContent = cn("visible", { invisible: loading });
    const loadingClass = cn("invisible", { visible: loading });
    return (
      <Comp
        className={cn(
          buttonVariants({
            variant,
            size,
            className,
            isLoading: loading ? "default" : "loading",
          })
        )}
        ref={ref}
        {...props}
      >
        <div
          className={`${loadingClassContent} flex items-center justify-center gap-2`}
        >
          {children}
        </div>
        <span
          className={`${loadingClass} pointer-events-none absolute inset-0 flex items-center justify-center`}
        >
          <Indicator />
        </span>
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
