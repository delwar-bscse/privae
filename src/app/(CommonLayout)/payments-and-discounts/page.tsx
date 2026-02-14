/* eslint-disable @typescript-eslint/no-explicit-any */
import CustomPagination from "@/components/cui/CustomPagination";
// import BookingTable from "./BookingTable";
// import { dummyBookingDatas } from "@/datas/bookingData";
import { CustomSearchBar } from "@/components/cui/CustomSearchBar";
import CustomStep from "@/components/cui/CustomStep";
import { StepDataType } from "@/types/type";
import Payment from "./Payment";
import { dummyTransactionDatas } from "@/datas/transactionData";
import Discount from "./Discount";
import { dummyDiscountDatas } from "@/datas/discountData";

const stepDatas: StepDataType[] = [
  { id: 1, title: "Transactions" },
  { id: 2, title: "Discounts" },
];



const PaymentAndDiscounts = async ({ searchParams }: { searchParams: any }) => {
  const { query, step, bookingStatus, page } = await searchParams;
  console.log("Payment And Discounts : ", query, bookingStatus, page, step)

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
          {step === "Discounts" ? <Discount data={dummyDiscountDatas} /> : <Payment data={dummyTransactionDatas} />}
        </div>
      </div>
      <CustomPagination TOTAL_PAGES={5} qryName="page" />
    </div>
  )
}

export default PaymentAndDiscounts;