/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { CustomModal } from "@/components/cui/CustomModal";
import CustomTable from "@/components/table/CustomTable";
import CustomTable2 from "@/components/table/CustomTable2";
import { RowString } from "@/components/table/tableRow";
// import { dummyBookingDatas } from "@/datas/bookingData";
// import { dummyMenusData } from "@/datas/menuData";
// import { dummyNoteDatas } from "@/datas/noteData";
// import { dummyReviewDatas } from "@/datas/reviewData";
import { bookingColumns } from "@/tableColumns/bookingColumns";
import { menuColumns } from "@/tableColumns/menuColumns";
import { reviewColumns } from "@/tableColumns/reviewColumns";
import { IBooking, IMenu, INotes, IReview } from "@/types/columnTypes";
import { X } from "lucide-react";
import Link from "next/link";
import EditChef from "./EditChef";
import { myFetch } from "@/utils/myFetch";
import { revalidate } from "@/helpers/revalidateHelper";
import { noteColumnsChef } from "@/tableColumns/noteColumnsChef";
import dayjs from "dayjs";


export default function SingleChefComponent({ chefDetails, id }: { chefDetails: any, id: string }) {
  // const data: any = dummyBookingDatas;
  // const reviewData: any = dummyReviewDatas;
  // const noteData: any = dummyNoteDatas;
  // const menuData: any = dummyMenusData;

  const bookingHistory = chefDetails?.bookingHistory?.map((item: any) => {
    return {
      id: item._id,
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

  const reviews = chefDetails?.reviews?.map((item: any) => {
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

  const notes = chefDetails?.adminNotes?.map((item: any) => {
    return {
      id: item?._id,
      updatedAt: item?.updatedAt,
      author: "Max Mustermann",
      note: item?.note
    }
  });

  const menus = chefDetails?.menus?.map((item: any) => {
    return {
      id: item?._id,
      title: item?.name,
      menuSection: item?.menu_section,
      dietType: item?.diet_types || [],
      allergens: item?.alergens || [],
      ingredients: item?.ingradients?.length || 0,
      prepTime: item?.est_prep_time,
      cookTime: item?.est_cooking_time
    }
  }) || [];

  console.log("Chef menu : ", menus)

  const blockUnblock = async () => {
    const res = await myFetch(`/user/block-unblock-user/${id}`, { method: "PATCH" });
    console.log("Block/Unblock User Res : ", res);
    if (res?.success) {
      revalidate("Chef");
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
            <RowString label="Chef ID" value={chefDetails?._id} />
            <RowString label="Member since" value={dayjs(chefDetails?.createdAt).format("DD-MMM-YYYY")} />
            <RowString label="Email" value={chefDetails?.email} />
            <RowString label="Phone" value={chefDetails?.contact} />
            <RowString label="Badge" value={chefDetails?.role} />
            <RowString label="Experience" value={chefDetails?.experience} />
            <RowString label="Location" value={chefDetails?.address} />
            <RowString label="Service Area" value={chefDetails?.cooking_area_distance} />
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
          <CustomTable<IBooking> columns={bookingColumns} data={bookingHistory} />
        </div>
      </div>
      {/* Menus */}
      <div>
        <p className="font-bold text-xl text-gray-800">Menus</p>
        <div className="ps-4">
          <CustomTable<IMenu> columns={menuColumns} data={menus} />
        </div>
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
          <CustomTable2<INotes> columns={noteColumnsChef} data={notes} />
        </div>
      </div>
      {/* Actions */}
      {/* Actions */}
      <div className="flex gap-3 ps-10">
        <button onClick={blockUnblock} className="flex items-center gap-1 bg-[#F2F2F2] rounded-sm px-3 py-1 text-red-500 font-semibold cursor-pointer">
          <X size={20} />
          {chefDetails?.status === "delete" ? "Unblock" : "Block"} User
        </button>
        {/* <button className="bg-[#F2F2F2] rounded-sm px-3 py-1 text-gray-700 font-semibold cursor-pointer">Add Note</button> */}
        <CustomModal trigger={<button className="bg-[#F2F2F2] rounded-sm px-3 py-2 text-gray-700 font-semibold cursor-pointer">Add Note</button>} title={"Add Note"} >
          <EditChef id={id}/>
        </CustomModal>
        <Link href="/messaging?id=1" className="bg-[#F2F2F2] rounded-sm px-3 py-1 text-gray-700 font-semibold cursor-pointer flex items-center">Chat</Link>
      </div>
    </div>
  );
}
