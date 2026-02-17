/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import CustomTable from "@/components/table/CustomTable";
import CustomTable2 from "@/components/table/CustomTable2";
import { RowArray, RowObject, RowString } from "@/components/table/tableRow";
import { dummyBookingDatas } from "@/datas/bookingData";
import { dummyNoteDatas } from "@/datas/noteData";
import { dummyReviewDatas } from "@/datas/reviewData";
import { bookingColumns } from "@/tableColumns/bookingColumns";
import { noteColumns } from "@/tableColumns/noteColumns";
import { reviewColumns } from "@/tableColumns/reviewColumns";
import { IBooking, INotes, IReview } from "@/types/columnTypes";
import { X } from "lucide-react";
import EditCustomer from "./EditCustomer";
import { CustomModal } from "@/components/cui/CustomModal";
import Link from "next/link";


export default function SingleCustomerComponent({ order }: { order: any }) {
  const data: any = dummyBookingDatas;
  const reviewData: any = dummyReviewDatas;
  const noteData: any = dummyNoteDatas;

  return (
    <div className="space-y-10 ps-4">
      {/* Profile */}
      <div>
        <p className="font-bold text-xl text-gray-800">Profile</p>
        <table className="text-sm text-left text-gray-600">
          <tbody>
            <RowString label="Customer ID" value="00222" />
            <RowString label="Member since" value="09-Jan-25" />
            <RowString label="Email" value="R2d8q@example.com" />
            <RowString label="Phone" value="+1 234 567 890" />
            <RowObject label="Address" value={order?.address} />
          </tbody>
        </table>
      </div>
      {/* Booking History */}
      <div>
        <p className="font-bold text-xl text-gray-800">Booking History</p>
        <div className="ps-4">
          <CustomTable<IBooking> columns={bookingColumns} data={data} />
        </div>
      </div>
      {/* Dietary Preferences */}
      <div>
        <p className="font-bold text-xl text-gray-800">Dietary Preferences</p>
        <table className="text-sm text-left text-gray-600">
          <tbody>
            <RowString label="Allergies" value="Peanuts" />
            <RowString label="Restrictions" value="Kosher" />
            <RowArray label="Preferences" value={["Healthy", "American", "Chinese"]} />
          </tbody>
        </table>
      </div>
      {/* Kitchen Equipment */}
      <div>
        <p className="font-bold text-xl text-gray-800">Kitchen Equipment</p>
        <table className="text-sm text-left text-gray-600">
          <tbody>
            <RowString label="Description" value="Standard Home Kitchen" />
            <RowArray label="Cooking Appliances" value={["Oven", "Stove-top", "Microwave", "Rice cooker"]} />
            <RowArray label="Tools" value={["Sharp knife", "Fillet knife", "Cutting Board"]} />
            <RowString label="Special Equipment" value="Kosher" />
          </tbody>
        </table>
      </div>
      {/* Reviews */}
      <div>
        <p className="font-bold text-xl text-gray-800">Reviews</p>
        <div className="ps-4">
          <CustomTable<IReview> columns={reviewColumns} data={reviewData} />
        </div>
      </div>
      {/* Internal Notes */}
      <div>
        <p className="font-bold text-xl text-gray-800">Internal Notes</p>
        <div className="ps-4">
          <CustomTable2<INotes> columns={noteColumns} data={noteData} />
        </div>
      </div>
      {/* Actions */}
      <div className="flex gap-3 ps-10">
        <button className="flex items-center gap-1 bg-[#F2F2F2] rounded-sm px-3 py-1 text-red-500 font-semibold cursor-pointer">
          <X size={20} />
          Block User
        </button>
        {/* <button className="bg-[#F2F2F2] rounded-sm px-3 py-1 text-gray-700 font-semibold cursor-pointer">Add Note</button> */}
        <CustomModal trigger={<button className="bg-[#F2F2F2] rounded-sm px-3 py-2 text-gray-700 font-semibold cursor-pointer">Add Note</button>} title={"Add Note"} >
          <EditCustomer />
        </CustomModal>
        <Link href="/messaging?id=1" className="bg-[#F2F2F2] rounded-sm px-3 py-1 text-gray-700 font-semibold cursor-pointer flex items-center">Chat</Link>
      </div>
    </div>
  );
}
