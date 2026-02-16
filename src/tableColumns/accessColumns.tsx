import { ColumnDef } from "@tanstack/react-table"
import { IAccess } from "@/types/columnTypes";
import { RiEdit2Line } from "react-icons/ri";
import { GrLock } from "react-icons/gr";
import dayjs from "dayjs";
import { CustomModal } from "@/components/cui/CustomModal";
import AddUser from "@/app/(CommonLayout)/admin/AddUser";

export const accessColumns: ColumnDef<IAccess>[] = [
  {
    accessorKey: "id",
    header: () => <div className="ps-2">User ID</div>,
    cell: ({ row }) => (
      <div className="capitalize ps-2">{row.getValue("id")}</div>
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
    accessorKey: "email",
    header: () => <div className="">Email</div>,
    cell: ({ row }) => (
      <div className="">{row.getValue("email")}</div>
    ),
  },
  {
    accessorKey: "role",
    header: () => <div className="">Role</div>,
    cell: ({ row }) => (
      <div className="">{row.getValue("role")}</div>
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
    accessorKey: "lastActivity",
    header: () => <div className="">Last Activity</div>,
    cell: ({ row }) => (
      <div className="">{dayjs(row.getValue("lastActivity")).format("DD-MMM-YYYY HH:mm A")}</div>
    ),
  },
  {
    id: "action",
    header: () => <div className="text-center">Action</div>,
    cell: ({ row }) => (
      <p className="flex items-center justify-center gap-1">
        <CustomModal trigger={<RiEdit2Line onClick={() => console.log("Note Id : ", row.original.id)} className="size-6 cursor-pointer text-gray-600" />} title={"Edit User"} >
          <AddUser />
        </CustomModal>
        <GrLock onClick={() => console.log("Note Id : ", row.original.id)} className="size-5 cursor-pointer text-gray-600" />
      </p>
    ),
  }
]