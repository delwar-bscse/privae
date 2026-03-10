/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { closedCustomModal } from "@/helpers/closedCustomModal";
import { revalidate } from "@/helpers/revalidateHelper";
import { myFetch } from "@/utils/myFetch";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type AddBookingFormValues = {
  adminNotes: string;
};


const EditChef = ({ id, notes }: { id: string, notes?: string }) => {

  const {
    register,
    handleSubmit,
    reset,
  } = useForm<AddBookingFormValues>({
    defaultValues: {
      adminNotes: "",
    },
  });

   useEffect(() => {
      if (notes) {
        reset({ adminNotes: notes });
      }
    }, [notes]);

  // Submit handler
  // Submit handler
  const onSubmit = async (data: AddBookingFormValues) => {

    try {
      //console.log("Form Data:", data);
      const payload = {
        note: data.adminNotes,
        type: "User" // 'User' | 'Order'
      }
      let method: "POST" | "PATCH" = "POST";
      if (notes) { method = "PATCH" }
      const res = await myFetch(`/user/admin-notes/${id}`, { method: method, body: payload });
      //console.log("Response Data:", res);

      if (res?.success) {
        toast.success("Admin notes updated successfully");
        revalidate("Chef");
        closedCustomModal();
        // reset();
      } else {
        toast.error(res.message || "Failed to update admin notes");
      }


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

export default EditChef;
