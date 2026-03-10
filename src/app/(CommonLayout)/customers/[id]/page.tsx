/* eslint-disable @typescript-eslint/no-explicit-any */
// import { dymmySingleBookingData } from "@/datas/bookingData";
// import SingleBooking from "./SingleBooking";
import { userImage } from "@/app/assets/assets";
import { ChevronRight } from "lucide-react";
import { GoStarFill } from "react-icons/go";
import Image from "next/image";
import SingleCustomerComponent from "./SingleCustomer";
import { myFetch } from "@/utils/myFetch";
import { formatUrl } from "@/utils/formatUrl";

const SingleBookingPage = async ({ params }: { params: any }) => {
  const { id } = await params;
  //console.log("Single Customer Id : ", id)
  // const order: any = dymmySingleBookingData;

  const resCustomer = await myFetch(`/user/${id}`, {
    method: "GET",
    tags: ['Customer']
  })
  const customerDetails = resCustomer?.data

  //console.log("Customer Details : ", customerDetails)

  return (
    <div>
      <div className="flex justify-between items-center px-4 pb-8">
        <div className="flex items-center gap-3">
          <Image src={formatUrl(customerDetails?.image) || userImage} width={100} height={100} alt="user Logo" className='w-16 h-16 object-cover rounded-full' />
          <div>
            <p className="font-bold text-xl text-gray-800">{customerDetails?.name}</p>
            <p className="flex items-center gap-1 text-gray-600">
              <GoStarFill className="size-6 text-[#FD713F]" />
              {`${customerDetails?.avg_rating} (${customerDetails?.total_rating} Reviews)`}
            </p>
          </div>
        </div>
        <p className="flex items-center gap-1 font-bold text-xl">
          <span className="flex items-center text-gray-700">Customers <ChevronRight className="size-6" /></span>
          <span className="text-[#FD713F]">ID {id}</span>
        </p>
      </div>
      <SingleCustomerComponent customerDetails={customerDetails} id={id} />
    </div>
  )
}

export default SingleBookingPage;