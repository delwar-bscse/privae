/* eslint-disable @typescript-eslint/no-explicit-any */
import CustomPagination from "@/components/cui/CustomPagination";
import BookingTable from "./BookingTable";
// import { dummyBookingDatas } from "@/datas/bookingData";
import { CustomSearchBar } from "@/components/cui/CustomSearchBar";
import CustomStep from "@/components/cui/CustomStep";
import { StepDataType } from "@/types/type";
import { myFetch } from "@/utils/myFetch";

const stepDatas: StepDataType[] = [
  { id: 1, title: "All" },
  { id: 2, title: "Pending" },
  { id: 3, title: "Confirmed" },
  { id: 4, title: "Cooking" },
  { id: 5, title: "Completed" },
  { id: 6, title: "Canceled" },
];



const Bookings = async ({ searchParams }: { searchParams: any }) => {
  const { query, bookingStatus, page } = await searchParams;
  console.log("User management : ", query, bookingStatus, page)

  const resBookings = await myFetch(`/order?limit=20&page=${page}&searchTerm=${query}`, {
    method: "GET",
    tags: ['Bookings']
  })

  const bookings = resBookings?.data?.map((item: any) => {
    return {
      id: item?._id,
      status: item?.status,
      dateTime: item?.strTime,
      chef: item?.chef?.name,
      customer: item?.user?.name,
      area: "",
      items: 5,
      estimatedTime: item?.duration,
      actualTime: null,
      rate: item?.rating,
      updated: item?.updatedAt,
    }
  }) || []

  // console.log("resBookings : ", resBookings)

  return (
    <div className="px-8 flex flex-col min-h-[86vh]">
      <div className="flex-1">
        <div className="w-full flex justify-between items-center pt-4">
          <CustomStep stepDatas={stepDatas} status="step" />
          <div className='w-60 xl:w-100'>
            <CustomSearchBar placeholder="Search here..." />
          </div>
        </div>
        <div className="pt-2">
          <BookingTable data={bookings} />
        </div>
      </div>
      <CustomPagination TOTAL_PAGES={resBookings?.pagination?.totalPage} qryName="page" />
    </div>
  )
}

export default Bookings;