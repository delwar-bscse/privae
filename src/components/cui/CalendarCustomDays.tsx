/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import * as React from "react"
import { Calendar, CalendarDayButton } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import { addDays } from "date-fns"
import { type DateRange } from "react-day-picker"
import { useUpdateMultiSearchParams } from "@/hooks/useUpdateMultiSearchParams"
import dayjs from "dayjs"

export function CalendarCustomDays() {
  const updateMultipleSearchParams = useUpdateMultiSearchParams();
  const [range, setRange] = React.useState<DateRange | undefined>({
    from: new Date(new Date().getFullYear(), 11, 8),
    to: addDays(new Date(new Date().getFullYear(), 11, 8), 10),
  })

  React.useEffect(() => {
    updateMultipleSearchParams({  startDate: dayjs(range?.from).format("YYYY-MM-DD"), endDate: dayjs(range?.to).format("YYYY-MM-DD") });
  }, [range])

  return (
    <Card className="mx-auto w-fit p-0">
      <CardContent className="p-0">
        <Calendar
          mode="range"
          defaultMonth={range?.from}
          selected={range}
          onSelect={setRange}
          numberOfMonths={1}
          captionLayout="dropdown"
          className="[--cell-size:--spacing(10)] md:[--cell-size:--spacing(12)]"
          formatters={{
            formatMonthDropdown: (date) => {
              return date.toLocaleString("default", { month: "long" })
            },
          }}
          components={{
            DayButton: ({ children, modifiers, day, ...props }) => {
              return (
                <CalendarDayButton day={day} modifiers={modifiers} {...props}>
                  {children}
                </CalendarDayButton>
              )
            },
          }}
        />
      </CardContent>
    </Card>
  )
}
