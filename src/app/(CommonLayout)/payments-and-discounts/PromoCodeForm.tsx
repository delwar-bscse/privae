/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { closedCustomModal } from "@/helpers/closedCustomModal";
import { revalidate } from "@/helpers/revalidateHelper";
import { myFetch } from "@/utils/myFetch";
import dayjs from "dayjs";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

type PromoCodeFormValues = {
  name: string;
  code: string;
  value: number;
  from: string;
  until: string;
  usageLimit: number;
  status: "active" | "paused" | "inactive";
};

export default function PromoCodeForm({ id }: { id?: string }) {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting },
  } = useForm<PromoCodeFormValues>({
    defaultValues: {
      status: "active",
    },
  });

  const getSingleCoupon = async () => {
    const resDiscount = await myFetch(`/coupon/${id}`, {
      method: "GET",
    });
    console.log("Response Data:", resDiscount);

    if (resDiscount?.success) {
      reset({
        name: resDiscount?.data?.name,
        code: resDiscount?.data?.custom_code,
        value: resDiscount?.data?.discount,
        from: dayjs(resDiscount?.data?.from).format("YYYY-MM-DD"),
        until: dayjs(resDiscount?.data?.until).format("YYYY-MM-DD"),
        usageLimit: resDiscount?.data?.max_use,
        status: resDiscount?.data?.status,
      });
    }
  }

  useEffect(() => {
    // console.log("Single coupon useEffect")
    if (id) {
      getSingleCoupon();
    }
  }, [id]);

  const onSubmit = async (data: PromoCodeFormValues) => {
    console.log("Form Data:", data);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const start = new Date(data?.from);
    start.setHours(0, 0, 0, 0);
    const end = new Date(data?.until);
    start.setHours(0, 0, 0, 0);

    // console.log("Compare Today:", today);
    // console.log("Compare From:", start);
    // console.log("Compare Until:", end);

    if (start < today) {
      toast.error("Start date must be greater or equal than today");
      return;
    } else if (end <= start) {
      toast.error("End date must be greater than start date");
      return;
    }

    const payload = {
      name: data?.name,
      custom_code: data?.code,
      discount: Number(data?.value),
      max_use: Number(data?.usageLimit),
      start_date: data?.from,
      end_date: data?.until,
      expiry: data?.until,
      status: data?.status
    };
    console.log("Payload Data:", payload);

    let url = `/coupon`;
    if (id) {
      url = `/coupon/${id}`;
    }
    let method: "POST" | "PATCH" = "POST";
    if (id) {
      method = "PATCH";
    }

    const resDiscount = await myFetch(`${url}`, {
      method: method,
      body: payload
    });

    console.log("Response Data:", resDiscount);

    if (resDiscount?.success) {
      toast.success("Promo Code added successfully");
      revalidate("discounts");
      await closedCustomModal();
    } else {
      toast.error(resDiscount?.message || "Failed to add Promo Code");
    }
  };



  return (
    <div className="">
      {/* <h2 className="text-xl font-semibold mb-6">Manage Promo Code</h2> */}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Promo Code Name <span className="text-red-500">*</span>
          </label>
          <input
            {...register("name")}
            required
            className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black/20"
            placeholder="Enter promo code"
          />
        </div>
        {/* Code */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Promo Code<span className="text-red-500">*</span>
          </label>
          <input
            {...register("code")}
            required
            className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black/20"
            placeholder="Enter promo code"
          />
        </div>

        {/* Value */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Value (%) <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            step="0.01"
            required
            min={1}
            max={100}
            {...register("value",)}
            className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black/20"
            placeholder="10"
          />
        </div>

        {/* Date Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* From */}
          <div>
            <label className="block text-sm font-medium mb-1">
              From <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              required
              {...register("from")}
              className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black/20"
            />
          </div>

          {/* Until */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Until <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              required
              {...register("until")}
              className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black/20"
            />
          </div>
        </div>

        {/* Usage Limit */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Usage Limit <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            required
            min={1}
            {...register("usageLimit")}
            className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black/20"
            placeholder="10"
          />
        </div>
        {/* Status */}
        <div className="flex flex-col gap-1">
          <label className="text-gray-700">Status</label>
          <Controller
            name="status"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                value={field.value}
                onValueChange={field.onChange}
              >
                <SelectTrigger className="authinput bg-[#F2F2F2] w-full">
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>

                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="paused">Paused</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-black text-white py-3 rounded-xl font-medium hover:bg-black/90 transition"
        >
          {isSubmitting ? "Saving..." : "Save"}
        </button>
      </form>
    </div>
  );
}
