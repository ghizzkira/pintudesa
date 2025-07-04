import * as React from "react"
import { cn } from "@yopem-ui/utils"

export const Table = ({
  className,
  ...props
}: React.ComponentProps<"table">) => {
  return (
    <div
      data-slot="table-container"
      className="relative min-h-max w-full overflow-x-auto border-b after:block after:h-[200px] after:content-['']"
    >
      <table
        data-slot="table"
        className={cn("w-full caption-bottom text-sm", className)}
        {...props}
      />
    </div>
  )
}

export const TableHeader = ({
  className,
  ...props
}: React.ComponentProps<"thead">) => {
  return (
    <thead
      data-slot="table-header"
      className={cn("[&_tr]:border-b", className)}
      {...props}
    />
  )
}

export const TableBody = ({
  className,
  ...props
}: React.ComponentProps<"tbody">) => {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  )
}

export const TableFooter = ({
  className,
  ...props
}: React.ComponentProps<"tfoot">) => {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",
        className,
      )}
      {...props}
    />
  )
}

export const TableRow = ({
  className,
  ...props
}: React.ComponentProps<"tr">) => {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        className,
      )}
      {...props}
    />
  )
}

export const TableHead = ({
  className,
  ...props
}: React.ComponentProps<"th">) => {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className,
      )}
      {...props}
    />
  )
}

export const TableCell = ({
  className,
  ...props
}: React.ComponentProps<"td">) => {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className,
      )}
      {...props}
    />
  )
}

export const TableCaption = ({
  className,
  ...props
}: React.ComponentProps<"caption">) => {
  return (
    <caption
      data-slot="table-caption"
      className={cn("text-muted-foreground mt-4 text-sm", className)}
      {...props}
    />
  )
}
