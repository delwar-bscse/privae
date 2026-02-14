/* eslint-disable @typescript-eslint/no-explicit-any */
import CustomPagination from "@/components/cui/CustomPagination";
import { CustomSearchBar } from "@/components/cui/CustomSearchBar";
import { dummyCustomerDatas } from "@/datas/customerData";
import ChefTable from "./ChefTable";



const Chefs = async ({ searchParams }: { searchParams: any }) => {
  const { query, bookingStatus, page } = await searchParams;
  console.log("User management : ", query, bookingStatus, page)

  return (
    <div className="px-8 flex flex-col min-h-[86vh]">
      <div className="flex-1">
        <div className="w-full flex justify-end items-center pt-4">
          <div className='w-60 xl:w-100'>
            <CustomSearchBar placeholder="Search here..." />
          </div>
        </div>
        <div className="pt-2">
          <ChefTable data={dummyCustomerDatas} />
        </div>
      </div>
      <CustomPagination TOTAL_PAGES={5} qryName="page" />
    </div>
  )
}

export default Chefs;