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
        <button className="flex items-center gap-1 border border-gray-300 px-3 h-9 rounded-md cursor-pointer">
          <span>Select Date</span>
          <IoIosArrowDown />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto">
        <CalendarCustomDays />
      </PopoverContent>
    </Popover>
  )
}
