
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { closedCustomModal } from "@/helpers/closedCustomModal";
import { revalidate } from "@/helpers/revalidateHelper";
import { myFetch } from "@/utils/myFetch";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type AddBookingFormValues = {
  reason: string;
};


const DeleteBooking = ({ id }: { id: string }) => {

  const {
    register,
    handleSubmit,
  } = useForm<AddBookingFormValues>({
    defaultValues: {
      reason: "",
    },
  });

  // Submit handler
  const onSubmit = async (data: AddBookingFormValues) => {

    try {
      console.log("Form Data:", data);
      const payload = {
        status: "Canceled",
        cancel_reason: data.reason
      }
      const res = await myFetch(`/order/change-status/${id}`, { method: "PATCH", body: payload });
      console.log("Response Data:", res);

      if (res?.success) {
        toast.success("Booking cancelled successfully");
        revalidate("Booking");
        closedCustomModal();
        // reset();
      } else {
        toast.error(res.message || "Failed to cancel booking");
      }


    } catch (error: any) {
      toast.error(error.message || "Failed to cancel booking");
    }
  };


  return (
    <>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 mt-4"
      >

        {/* Address */}
        <div className="flex flex-col gap-1">
          <label className="text-gray-700">Cancel Reason</label>
          <input
            type="text"
            placeholder="Type Reason"
            {...register("reason", { required: true })}
            className="authinput"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full mt-6 bg-[#272727] text-white py-3 rounded-xl font-semibold hover:bg-[#272727]/90 transition"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default DeleteBooking;
