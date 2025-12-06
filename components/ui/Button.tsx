import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import type { ButtonHTMLAttributes, ReactNode } from "react";

const buttonStyles = cva(
  "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
  {
    variants: {
      variant: {
        primary: "bg-white text-black hover:bg-neutral-200",
        ghost:
          "bg-white/10 text-white hover:bg-white/20 border border-white/10",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  asChild?: boolean;
  children: ReactNode;
}

export function Button({
  className,
  variant,
  asChild,
  children,
  ...rest
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={clsx(buttonStyles({ variant }), className)} {...rest}>
      {children}
    </Comp>
  );
}
