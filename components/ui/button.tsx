import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 outline-none focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-3 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-white text-black rounded-[18px] hover:-translate-y-0.5 hover:shadow-glow-lift hover:bg-neutral-100",
        accent:
          "bg-accent-strong text-white rounded-[18px] hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-glow-lift",
        ghost:
          "border border-line text-fg rounded-[18px] hover:border-white/30 hover:bg-white/[0.04] hover:-translate-y-0.5",
        handwritten:
          "bg-white text-black font-handwritten text-[22px] rounded-[18px] leading-none hover:-translate-y-0.5 hover:shadow-glow-lift hover:bg-neutral-100",
        // Backward-compatibility aliases
        default:
          "bg-white text-black rounded-[18px] hover:-translate-y-0.5 hover:shadow-glow-lift hover:bg-neutral-100",
        destructive:
          "bg-red-600 text-white rounded-[18px] hover:bg-red-700",
        outline:
          "border border-line text-fg rounded-[18px] hover:border-white/30 hover:bg-white/[0.04] hover:-translate-y-0.5",
        secondary:
          "bg-bg-elevated text-fg border border-line rounded-[18px] hover:bg-bg-soft",
        link: "text-accent underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-5 py-2.5 text-sm",
        sm: "h-8 rounded-[14px] px-3.5 text-xs",
        lg: "h-12 rounded-[18px] px-8 text-base",
        icon: "h-10 w-10 rounded-[14px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
