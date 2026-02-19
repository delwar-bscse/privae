/* eslint-disable @typescript-eslint/no-explicit-any */
// import { dymmySingleBookingData } from "@/datas/bookingData";
import SingleBooking from "./SingleBooking";
import { ChevronRight } from "lucide-react";
import { myFetch } from "@/utils/myFetch";

const SingleBookingPage = async ({ params }: { params: any }) => {
  const { id } = await params;
  console.log("Single Booking Id : ", id)
  // const order: any = dymmySingleBookingData;

  const resBooking = await myFetch(`/order/${id}`, {
    method: "GET",
    tags: ['Booking']
  })

  // console.log("Booking Details : ", resBooking)

  return (
    <div>
      <div className="flex justify-between items-center px-4 pb-8">
        <p className="font-bold text-xl text-gray-800">Booking #{id}</p>
        <p className="flex items-center gap-1 font-bold text-xl">
          <span className="flex items-center text-gray-700">Bookings <ChevronRight className="size-6" /></span>
          <span className="text-[#FD713F]">ID {id}</span>
        </p>
      </div>
      <SingleBooking order={resBooking?.data} />
    </div>
  )
}

export default SingleBookingPage;