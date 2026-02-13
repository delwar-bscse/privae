import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-1 whitespace-nowrap text-sm font-medium transition-all outline-none focus-visible:border-ring-none focus-visible:ring-none aria-invalid:ring-0 dark:aria-invalid:ring-0 aria-invalid:border-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        paginationButton: "bg-white hover:bg-[#FD713F] text-gray-600 hover:text-white  rounded-full cursor-pointer transition-colors duration-300",
        paginationButtonActive: "bg-[#FD713F] text-white rounded-full cursor-pointer transition-colors duration-300",
        paginationGhostButton: "bg-white hover:text-gray-500 hover:bg-gray-50 text-gray-700",
        paginationGhostButtonDisable: "text-gray-300 hover:text-gray-500 hover:bg-gray-50",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 px-6 has-[>svg]:px-4",
        paginationIcon: "size-9",
        llg: "h-11 px-6 has-[>svg]:px-4",
        xl: "h-12 px-10 has-[>svg]:px-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
