/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm } from "react-hook-form";
import { toast } from "sonner";

type AddBookingFormValues = {
  adminNotes: string;
};


const EditBooking = () => {

  const {
    register,
    handleSubmit,
    reset,
  } = useForm<AddBookingFormValues>({
    defaultValues: {
      adminNotes: "",
    },
  });

  // Submit handler
  const onSubmit = async (data: AddBookingFormValues) => {

    try {
      console.log("Form Data:", data);
      toast.success("User added successfully");
      reset();

    } catch (error: any) {
      toast.error(error.message || "Failed to add user");
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
          <label className="text-gray-700">Admin Notes</label>
          <input
            type="text"
            placeholder="Admin Notes"
            {...register("adminNotes", { required: true })}
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

export default EditBooking;
