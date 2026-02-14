/* eslint-disable @typescript-eslint/no-explicit-any */
import CustomPagination from "@/components/cui/CustomPagination";
// import BookingTable from "./BookingTable";
// import { dummyBookingDatas } from "@/datas/bookingData";
import CustomStep from "@/components/cui/CustomStep";
import { StepDataType } from "@/types/type";
import AccessComponent from "./Access";
import { dummyAccessDatas } from "@/datas/accessDatas";

const stepDatas: StepDataType[] = [
  { id: 1, title: "Access" },
  { id: 2, title: "Platform Rules" },
  { id: 3, title: "Settings" },
  { id: 4, title: "T&Cs" },
  { id: 5, title: "Privacy" },
];



const AdminPage = async ({ searchParams }: { searchParams: any }) => {
  const { query, step, bookingStatus, page } = await searchParams;
  console.log("Payment And Discounts : ", query, bookingStatus, page, step)

  return (
    <div className="px-8 flex flex-col min-h-[86vh]">
      <div className="flex-1">
        <div className="w-full flex justify-between items-center pt-4">
          <CustomStep stepDatas={stepDatas} status="step" />
          <div className='w-60 xl:w-100'>
            {/* <CustomSearchBar placeholder="Search here..." /> */}
          </div>
        </div>
        <div className="pt-2">
          {step === "Access" && <AccessComponent data={dummyAccessDatas} />}
        </div>
      </div>
      <CustomPagination TOTAL_PAGES={5} qryName="page" />
    </div>
  )
}

export default AdminPage;