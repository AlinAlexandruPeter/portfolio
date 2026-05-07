import * as React from "react"

import { cn } from "../../lib/utils.js"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex w-full border-4 ring-0 border-[#5DECDE]/60 border-t-transparent border-r-transparent border-l-transparent bg-transparent px-3 py-1 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus:border-4 focus:rounded-sm focus:border-[#5DECDE] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm not-placeholder-shown:border-b-[#5DECDE] autofill:bg-transparent! autofill:text-secondary! ",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
