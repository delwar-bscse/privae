/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import FeeSection from "@/components/form/FeeSection";
import { myFetch } from "@/utils/myFetch";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type PlatformFeesFormValues = {
  margin: number;
  customer_service_charge: number;
  chef_service_charge: number;
};

export default function PlatformFees() {

  const {
    register,
    handleSubmit,
    reset,
  } = useForm<PlatformFeesFormValues>({
    defaultValues: {
      margin: 0,
      customer_service_charge: 0,
      chef_service_charge: 0,
    },
  });

  const getPlatformFees = async () => {
    const res = await myFetch("/admin/platform-charge", { method: "GET" });
    console.log("Get Platform Fees : ", res)

    if (res?.success) {
      reset({
        margin: res?.data?.margin,
        customer_service_charge: res?.data?.customer_service_charge,
        chef_service_charge: res?.data?.chef_service_charge,
      });
    }
  };

  useEffect(() => {
    getPlatformFees();
  }, []);

  const onSubmit = async (data: PlatformFeesFormValues) => {
    // console.log("Updated Fees:", data);
    const payload = {
      margin: data.margin,
      customer_service_charge: data.customer_service_charge,
      chef_service_charge: data.chef_service_charge,
    };
    const res = await myFetch("/admin/platform-charge", { method: "POST", body: payload });
    // console.log("Update Platform Fees : ", res)

    if (res?.success) {
      toast.success("Platform Fees updated successfully");
    } else {
      toast.error(res?.message || "Failed to update platform fees");
    }
  };

  const onCancel = () => {
    getPlatformFees();
  }

  return (

    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md p-6 space-y-8"
    >

      {/* Header */}
      <h2 className="text-lg font-semibold">
        Platform Fees
      </h2>

      {/* Platform Margin */}
      <FeeSection<PlatformFeesFormValues>
        title="Platform Margin"
        description="Calculated: Chef's rate × (1 + Margin)"
        name="margin"
        register={register}
        suffix="%"
      />

      {/* Service Fee Percent */}
      <FeeSection<PlatformFeesFormValues>
        title="Customer Service Fee"
        description="Added to Order Subtotal"
        name="customer_service_charge"
        register={register}
        suffix="%"
      />

      {/* Service Fee Flat */}
      <FeeSection<PlatformFeesFormValues>
        title="Chef Service Fee"
        description="Subtracted from Order"
        name="chef_service_charge"
        register={register}
        suffix="$"
      />
      <div className="flex gap-3 pt-1">
        <button
          type="submit"
          className="bg-gray-800 text-white px-5 py-2 rounded-xl font-medium hover:bg-gray-900"
        >
          Update
        </button>

        <button
          type="button"
          onClick={onCancel}
          className="bg-red-200 text-red-600 px-5 py-2 rounded-xl font-medium hover:bg-red-300"
        >
          Cancel
        </button>
      </div>

    </form>

  );
}
