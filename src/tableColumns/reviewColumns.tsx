import { ColumnDef } from "@tanstack/react-table"
import { IReview } from "@/types/columnTypes";
import dayjs from "dayjs";

export const reviewColumns: ColumnDef<IReview>[] = [
  {
    accessorKey: "dateTime",
    header: () => <div className="ps-2">Reviewed at</div>,
    cell: ({ row }) => (
      <div className="capitalize ps-2">{dayjs(row.getValue("dateTime")).format("DD-MMM-YYYY HH:mm A") }</div>
    ),
  },
  {
    accessorKey: "chef",
    header: () => <div className="">Chef 👨‍🍳</div>,
    cell: ({ row }) => (
      <div className="">{row.getValue("chef")}</div>
    ),
  },
  {
    accessorKey: "averageRating",
    header: () => <div className="">Average Rating</div>,
    cell: ({ row }) => (
      <div className="">{row.getValue("averageRating")}</div>
    ),
  },
  {
    accessorKey: "kitchenReadiness",
    header: () => <div className="">Kitchen Readiness</div>,
    cell: ({ row }) => (
      <div className="">{row.getValue("kitchenReadiness")}</div>
    ),
  },
  {
    accessorKey: "communication",
    header: () => <div className="">Communication</div>,
    cell: ({ row }) => (
      <div className="">{row.getValue("communication")}</div>
    ),
  },
  {
    accessorKey: "reviewText",
    header: () => <div className="">Review</div>,
    cell: ({ row }) => (
      <div className="">{row.getValue("reviewText")}</div>
    ),
  }
]