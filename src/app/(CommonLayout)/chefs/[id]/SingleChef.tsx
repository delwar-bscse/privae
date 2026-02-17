/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { CustomModal } from "@/components/cui/CustomModal";
import CustomTable from "@/components/table/CustomTable";
import CustomTable2 from "@/components/table/CustomTable2";
import { RowString } from "@/components/table/tableRow";
import { dummyBookingDatas } from "@/datas/bookingData";
import { dummyMenusData } from "@/datas/menuData";
import { dummyNoteDatas } from "@/datas/noteData";
import { dummyReviewDatas } from "@/datas/reviewData";
import { bookingColumns } from "@/tableColumns/bookingColumns";
import { menuColumns } from "@/tableColumns/menuColumns";
import { noteColumns } from "@/tableColumns/noteColumns";
import { reviewColumns } from "@/tableColumns/reviewColumns";
import { IBooking, IMenu, INotes, IReview } from "@/types/columnTypes";
import { X } from "lucide-react";
import Link from "next/link";
import EditChef from "./EditChef";


export default function SingleChefComponent() {
  const data: any = dummyBookingDatas;
  const reviewData: any = dummyReviewDatas;
  const noteData: any = dummyNoteDatas;
  const menuData: any = dummyMenusData;

  return (
    <div className="space-y-10 ps-4">
      {/* Profile */}
      <div>
        <p className="font-bold text-xl text-gray-800">Profile</p>
        <table className="text-sm text-left text-gray-600">
          <tbody>
            <RowString label="Chef ID" value="00222" />
            <RowString label="Member since" value="09-Jan-25" />
            <RowString label="Email" value="R2d8q@example.com" />
            <RowString label="Phone" value="+1 234 567 890" />
            <RowString label="Badge" value="Professional Chef" />
            <RowString label="Experience" value="4 years" />
            <RowString label="Location" value={"1901 Thornridge Cir. Shiloh, Hawaii 81063"} />
            <RowString label="Service Area" value={"10km"} />
          </tbody>
        </table>
      </div>
      {/* Rates */}
      <div>
        <p className="font-bold text-xl text-gray-800">Rates</p>
        <table className="text-sm text-left text-gray-600">
          <tbody>
            <RowString label="Standard Rate" value="$40.00" />
            <RowString label="Weekend Rate" value="-" />
            <RowString label="Weekday Rate" value="$30.00" />
            <RowString label="Weekday Rate Time" value="9:00 AM to 4:00 PM" />
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
      {/* Menus */}
      <div>
        <p className="font-bold text-xl text-gray-800">Menus</p>
        <div className="ps-4">
          <CustomTable<IMenu> columns={menuColumns} data={menuData} />
        </div>
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
      {/* Actions */}
      <div className="flex gap-3 ps-10">
        <button className="flex items-center gap-1 bg-[#F2F2F2] rounded-sm px-3 py-1 text-red-500 font-semibold cursor-pointer">
          <X size={20} />
          Block User
        </button>
        {/* <button className="bg-[#F2F2F2] rounded-sm px-3 py-1 text-gray-700 font-semibold cursor-pointer">Add Note</button> */}
        <CustomModal trigger={<button className="bg-[#F2F2F2] rounded-sm px-3 py-2 text-gray-700 font-semibold cursor-pointer">Add Note</button>} title={"Add Note"} >
          <EditChef />
        </CustomModal>
        <Link href="/messaging?id=1" className="bg-[#F2F2F2] rounded-sm px-3 py-1 text-gray-700 font-semibold cursor-pointer flex items-center">Chat</Link>
      </div>
    </div>
  );
}
