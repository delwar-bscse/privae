/* eslint-disable @typescript-eslint/no-explicit-any */

import { CustomModal } from "@/components/cui/CustomModal";
import { RowArray, RowString } from "@/components/table/tableRow";
import { X } from "lucide-react";
import EditBooking from "./EditBooking";
import DeleteBooking from "./DeleteBooking";


export default function OrderTable({ order, id }: { order: any, id: string }) {

  return (
    <div className="space-y-10">
      <table className="text-sm text-left text-gray-600">
        <tbody>
          <RowString label="Order Status" value={order?.status} />
          <RowString label="Ordered At" value={new Date(order?.formatted_date).toLocaleString()} />
          <RowString label="Ordered For" value={order?.user?.name} />
          <RowString label="Chef" value={order?.chef?.name} />
          <RowString label="Customer" value={order?.user?.name} />
          <RowString label="Address" value={order?.formatted_address} />
          <RowString label="Items" value={`${order?.items?.count ?? 0} Items, ${order?.items?.portions ?? 0} Portions`} />
          <RowArray label="Dishes" value={order?.dishes} />
          <RowString label="Estimated Time" value={order?.duration} />
          <RowString label="Rate" value={`$${order?.total_price?.toFixed(2)}`} />
          <RowString label="Actual Rate" value={order?.actualRate} />
          <RowString label="Updated At" value={new Date(order?.updatedAt)?.toLocaleString()} />
          <RowString label="Notes to Chef" value={order?.notesToChef} />
          <RowString label="Admin Notes" value={order?.adminNotes?.[0]?.note} />
        </tbody>
      </table>
      <div className="flex gap-3 px-4">
        {/* <button className="flex items-center gap-1 bg-[#F2F2F2] rounded-sm px-3 py-2 text-red-500 font-semibold cursor-pointer">
          <X size={20} />
          Cancel Order
        </button> */}
        <CustomModal trigger={<button className="flex items-center gap-1 bg-[#F2F2F2] rounded-full px-3 py-1 text-sm text-red-500  cursor-pointer">
          <X size={16} />
          Cancel Order
        </button>} title={"Add Note"} >
          <DeleteBooking id={id} />
        </CustomModal>
        {/* <button className="bg-[#F2F2F2] rounded-sm px-3 py-2 text-gray-700 font-semibold cursor-pointer">Edit Order</button> */}
        <CustomModal trigger={<button disabled={order?.adminNotes?.length > 0} className="bg-[#F2F2F2] rounded-full px-3 py-1 text-sm  text-gray-700  cursor-pointer disabled:cursor-not-allowed disabled:opacity-70">Add Note</button>} title={"Add Note"} >
          <EditBooking id={id} />
        </CustomModal>
      </div>
    </div>
  );
}