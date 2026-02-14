/* eslint-disable @typescript-eslint/no-explicit-any */
import CustomPagination from "@/components/cui/CustomPagination";
import BookingTable from "./BookingTable";
import { dummyBookingDatas } from "@/datas/bookingData";
import { CustomSearchBar } from "@/components/cui/CustomSearchBar";
import CustomStep from "@/components/cui/CustomStep";
import { StepDataType } from "@/types/type";

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
          <BookingTable data={dummyBookingDatas} />
        </div>
      </div>
      <CustomPagination TOTAL_PAGES={5} qryName="page" />
    </div>
  )
}

export default Bookings;