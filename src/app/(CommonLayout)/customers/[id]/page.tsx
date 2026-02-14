/* eslint-disable @typescript-eslint/no-explicit-any */
import { dymmySingleBookingData } from "@/datas/bookingData";
// import SingleBooking from "./SingleBooking";
import { userImage } from "@/app/assets/assets";
import { ChevronRight } from "lucide-react";
import { GoStarFill } from "react-icons/go";
import Image from "next/image";
import SingleCustomerComponent from "./SingleCustomer";

const SingleBookingPage = async({ params }: { params: any }) => {
  const { id } = await params;
  console.log("Single Customer Id : ", id)
  const order: any = dymmySingleBookingData;

  return (
    <div>
      <div className="flex justify-between items-center px-4 pb-8">
        <div className="flex items-center gap-3">
          <Image src={userImage} width={100} height={100} alt="user Logo" className='w-16 h-16 object-cover rounded-full' />
          <div>
            <p className="font-bold text-xl text-gray-800">Md. Delwar Hossain</p>
            <p className="flex items-center gap-1 text-gray-600">
              <GoStarFill className="size-6 text-[#FD713F]"/>
              4.5 (482 Reviews)
            </p>
          </div>
        </div>
        <p className="flex items-center gap-1 font-bold text-xl">
          <span className="flex items-center text-gray-700">Bookings <ChevronRight className="size-6"/></span>
          <span className="text-[#FD713F]">ID {id}</span>
        </p>
      </div>
      <SingleCustomerComponent order={order} />
    </div>
  )
}

export default SingleBookingPage;