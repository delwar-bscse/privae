import { ColumnDef } from "@tanstack/react-table"
import { IMenu } from "@/types/columnTypes";

export const menuColumns: ColumnDef<IMenu>[] = [
  {
    accessorKey: "id",
    header: () => <div className="ps-2">Dish ID</div>,
    cell: ({ row }) => (
      <div className="capitalize ps-2">{row.getValue("id")}</div>
    ),
  },
  {
    accessorKey: "title",
    header: () => <div className="">Title</div>,
    cell: ({ row }) => (
      <div className="">{row.getValue("title")}</div>
    ),
  },
  {
    accessorKey: "menuSection",
    header: () => <div className="">Menu Section</div>,
    cell: ({ row }) => (
      <div className="">{row.getValue("menuSection")}</div>
    ),
  },
  {
    accessorKey: "dietType",
    header: () => <div className="">Diet Type</div>,
    cell: ({ row }) => (
      <div className="">{row.getValue("dietType")}</div>
    ),
  },
  {
    accessorKey: "allergens",
    header: () => <div className="">Allergens</div>,
    cell: ({ row }) => (
      <div className="">{row.getValue("allergens")}</div>
    ),
  },
  {
    accessorKey: "ingredients",
    header: () => <div className="">Ingredients</div>,
    cell: ({ row }) => (
      <div className="">{row.getValue("ingredients")}</div>
    ),
  },
  {
    accessorKey: "prepTime",
    header: () => <div className="">Prep. Time</div>,
    cell: ({ row }) => (
      <div className="">{row.getValue("prepTime")}</div>
    ),
  },
  {
    accessorKey: "cookTime",
    header: () => <div className="">Cook. Time</div>,
    cell: ({ row }) => (
      <div className="">{row.getValue("cookTime")}</div>
    ),
  }
]