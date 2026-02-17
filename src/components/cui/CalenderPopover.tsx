import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { CalendarCustomDays } from "./CalendarCustomDays"
import { IoIosArrowDown } from "react-icons/io"

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="flex items-center gap-1 border px-3 py-1 rounded-md cursor-pointer">
          <span>Custom</span>
          <IoIosArrowDown />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto">
        <CalendarCustomDays />
      </PopoverContent>
    </Popover>
  )
}
