/* eslint-disable @typescript-eslint/no-explicit-any */

import { CustomModal } from "@/components/cui/CustomModal";
import { RowArray, RowString } from "@/components/table/tableRow";
import { X } from "lucide-react";
import EditBooking from "./EditBooking";


export default function OrderTable({ order }: { order: any }) {

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
          <RowString label="Admin Notes" value={order?.adminNotes} />
        </tbody>
      </table>
      <div className="flex gap-3 ps-10">
        <button className="flex items-center gap-1 bg-[#F2F2F2] rounded-sm px-3 py-2 text-red-500 font-semibold cursor-pointer">
          <X size={20} />
          Cancel Order
        </button>
        {/* <button className="bg-[#F2F2F2] rounded-sm px-3 py-2 text-gray-700 font-semibold cursor-pointer">Edit Order</button> */}
        <CustomModal trigger={<button className="bg-[#F2F2F2] rounded-sm px-3 py-2 text-gray-700 font-semibold cursor-pointer">Add Note</button>} title={"Add Note"} >
          <EditBooking />
        </CustomModal>
      </div>
    </div>
  );
}