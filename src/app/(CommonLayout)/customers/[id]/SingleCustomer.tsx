/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import CustomTable from "@/components/table/CustomTable";
import CustomTable2 from "@/components/table/CustomTable2";
import { RowArray, RowString } from "@/components/table/tableRow";
// import { dummyBookingDatas } from "@/datas/bookingData";
// import { dummyNoteDatas } from "@/datas/noteData";
// import { dummyReviewDatas } from "@/datas/reviewData";
import { bookingColumns } from "@/tableColumns/bookingColumns";
import { noteColumnsCustomer } from "@/tableColumns/noteColumnsCustomer";
import { reviewColumns } from "@/tableColumns/reviewColumns";
import { IBooking, INotes, IReview } from "@/types/columnTypes";
import { X } from "lucide-react";
import EditCustomer from "./EditCustomer";
import { CustomModal } from "@/components/cui/CustomModal";
import Link from "next/link";
import dayjs from "dayjs";
import { myFetch } from "@/utils/myFetch";
import { revalidate } from "@/helpers/revalidateHelper";


export default function SingleCustomerComponent({ customerDetails, id }: { customerDetails: any, id: string }) {
  // const data: any = dummyBookingDatas;
  // const reviewData: any = dummyReviewDatas;
  // const noteData: any = dummyNoteDatas;

  const bookingHistory = customerDetails?.bookingHistory?.map((item: any) => {
    return {
      id: item._id,
      order_id: item?.order_id,
      status: item.status,
      dateTime: item.formatted_date,
      chef: item.chef.name,
      customer: item.user.name,
      area: "10001",
      items: 1,
      estimatedTime: item.duration,
      actualTime: null,
      rate: item.total_price,
      updated: item.formatted_date
    }
  });

  const reviews = customerDetails?.reviews?.map((item: any) => {
    return {
      id: item._id,
      dateTime: item.createdAt,
      chef: item.chef.name,
      averageRating: item.rating,
      kitchenReadiness: item?.kitchen_readiness,
      communication: item?.communication,
      reviewText: item.review
    }
  });

  const notes = customerDetails?.adminNotes?.map((item: any) => {
    return {
      id: item?._id,
      updatedAt: item?.updatedAt,
      author: "Max Mustermann",
      note: item?.note
    }
  });

  const blockUnblock = async () => {
    const res = await myFetch(`/user/block-unblock-user/${id}`, { method: "PATCH" });
    console.log("Block/Unblock User Res : ", res);
    if (res?.success) {
      revalidate("Customer");
      // toast.success(res?.message);
    }
  }

  return (
    <div className="space-y-10 ps-4">
      {/* Profile */}
      <div>
        <p className="font-bold text-xl text-gray-800">Profile</p>
        <table className="text-sm text-left text-gray-600">
          <tbody>
            <RowString label="Customer ID" value={customerDetails?._id} />
            <RowString label="Member since" value={dayjs(customerDetails?.createdAt).format("DD-MMM-YYYY")} />
            <RowString label="Email" value={customerDetails?.email} />
            <RowString label="Phone" value={customerDetails?.contact} />
            <RowString label="Address" value={customerDetails?.address} />
          </tbody>
        </table>
      </div>
      {/* Booking History */}
      <div>
        <p className="font-bold text-xl text-gray-800">Booking History</p>
        <div className="ps-4">
          <CustomTable<IBooking> columns={bookingColumns} data={bookingHistory} />
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
          <CustomTable<IReview> columns={reviewColumns} data={reviews} />
        </div>
      </div>
      {/* Internal Notes */}
      <div>
        <p className="font-bold text-xl text-gray-800">Internal Notes</p>
        <div className="ps-4">
          <CustomTable2<INotes> columns={noteColumnsCustomer} data={notes} />
        </div>
      </div>
      {/* Actions */}
      <div className="flex gap-3 ps-10">
        <button onClick={blockUnblock} className="flex items-center gap-1 bg-[#F2F2F2] rounded-sm px-3 py-1 text-red-500 font-semibold cursor-pointer">
          <X size={20} />
          {customerDetails?.status === "delete" ? "Unblock" : "Block"} User
        </button>
        {/* <button className="bg-[#F2F2F2] rounded-sm px-3 py-1 text-gray-700 font-semibold cursor-pointer">Add Note</button> */}
        <CustomModal trigger={<button className="bg-[#F2F2F2] rounded-sm px-3 py-2 text-gray-700 font-semibold cursor-pointer">Add Note</button>} title={"Add Note"} >
          <EditCustomer id={id} />
        </CustomModal>
        <Link href="/messaging?id=1" className="bg-[#F2F2F2] rounded-sm px-3 py-1 text-gray-700 font-semibold cursor-pointer flex items-center">Chat</Link>
      </div>
    </div>
  );
}
