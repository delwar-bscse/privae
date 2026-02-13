import { ColumnDef } from "@tanstack/react-table"
import { IBooking} from "@/types/columnTypes";
import dayjs from "dayjs";

export const bookingColumns: ColumnDef<IBooking>[] = [
  {
    accessorKey: "id",
    header: () => <div className="ps-2">Booking ID</div>,
    cell: ({ row }) => (
      <div className="capitalize ps-2">{row.getValue("id")}</div>
    ),
  },
  {
    accessorKey: "status",
    header: () => <div className="">Status</div>,
    cell: ({ row }) => (
      <div className="">{row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "dateTime",
    header: () => <div className="">Date & Time</div>,
    cell: ({ row }) => (
      <div className="">{dayjs(row.getValue("dateTime")).format("DD-MMM-YYYY HH:mm A") }</div>
    ),
  },
  {
    accessorKey: "chef",
    header: () => <div className="">Chef</div>,
    cell: ({ row }) => (
      <div className="">{row.getValue("chef")}</div>
    ),
  },
  {
    accessorKey: "area",
    header: () => <div className="">Area</div>,
    cell: ({ row }) => (
      <div className="">{row.getValue("area")}</div>
    ),
  },
  {
    accessorKey: "items",
    header: () => <div className="">Items</div>,
    cell: ({ row }) => (
      <div className="">{row.getValue("items")}</div>
    ),
  },
  {
    accessorKey: "estimatedTime",
    header: () => <div className="">Est.Time</div>,
    cell: ({ row }) => (
      <div className="">{row.getValue("estimatedTime")}</div>
    ),
  },
  {
    accessorKey: "actualTime",
    header: () => <div className="">Act.Time</div>,
    cell: ({ row }) => (
      <div className="">{row.getValue("actualTime")}</div>
    ),
  },
  {
    accessorKey: "rate",
    header: () => <div className="">Rate</div>,
    cell: ({ row }) => (
      <div className="">{row.getValue("rate")}</div>
    ),
  },
  {
    accessorKey: "updated",
    header: () => <div className="">Updated</div>,
    cell: ({ row }) => (
      <div className="">{dayjs(row.getValue("updated")).format("DD-MMM-YYYY HH:mm A") }</div>
    ),
  },
]