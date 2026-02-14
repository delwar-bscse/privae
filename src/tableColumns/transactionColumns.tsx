import { ColumnDef } from "@tanstack/react-table"
import { ITransaction } from "@/types/columnTypes";

export const transactionColumns: ColumnDef<ITransaction>[] = [
  {
    accessorKey: "id",
    header: () => <div className="ps-2">Booking ID</div>,
    cell: ({ row }) => (
      <div className="capitalize ps-2">{row.getValue("id")}</div>
    ),
  },
  {
    accessorKey: "type",
    header: () => <div className="">Type</div>,
    cell: ({ row }) => (
      <div className="">{row.getValue("type")}</div>
    ),
  },
  {
    accessorKey: "name",
    header: () => <div className="">Name</div>,
    cell: ({ row }) => (
      <div className="">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "amount",
    header: () => <div className="">Amount</div>,
    cell: ({ row }) => (
      <div className="">{row.getValue("amount")}</div>
    ),
  },
  {
    accessorKey: "time",
    header: () => <div className="">Time</div>,
    cell: ({ row }) => (
      <div className="">{row.getValue("time")}</div>
    ),
  },
  {
    accessorKey: "hourlyRate",
    header: () => <div className="">Hourly Rate</div>,
    cell: ({ row }) => (
      <div className="">{row.getValue("hourlyRate")}</div>
    ),
  },
  {
    accessorKey: "grossMargin",
    header: () => <div className="">Gross Margin</div>,
    cell: ({ row }) => (
      <div className="">{row.getValue("grossMargin")}</div>
    ),
  },
  {
    accessorKey: "status",
    header: () => <div className="">Status</div>,
    cell: ({ row }) => (
      <div className="">{row.getValue("status")}</div>
    ),
  }
]