import * as React from "react";

import { cn } from "@/lib/utils";
import { AtSign } from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, icon, label, type, ...props }, ref) => {
    return (
      <label className="relative">
        {label ? <p className="mb-1 text-xs font-semibold">{label}</p> : null}
        <span className="absolute bottom-0 start-0 top-5 flex w-10 items-center justify-center">
          {icon}
        </span>
        <input
          type={type}
          className={cn(
            "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm font-medium transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            { "ps-9": !!icon },
            className
          )}
          ref={ref}
          {...props}
        />
      </label>
    );
  }
);
Input.displayName = "Input";

export { Input };
