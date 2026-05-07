import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
          "flex w-full h-[20vh] border-4 ring-0 border-[#5DECDE]/60 border-t-transparent border-r-transparent border-l-transparent bg-transparent px-3 py-1 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus:border-4 focus:rounded-sm focus:border-[#5DECDE] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm not-placeholder-shown:border-b-[#5DECDE]",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
