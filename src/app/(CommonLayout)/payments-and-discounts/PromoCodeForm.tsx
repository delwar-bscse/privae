"use client";

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Controller, useForm } from "react-hook-form";

type PromoCodeFormValues = {
  name: string;
  value: number;
  from: string;
  until: string;
  usageLimit: number;
  status: "ACTIVE" | "PAUSED" | "INACTIVE";
};

export default function PromoCodeForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<PromoCodeFormValues>({
    defaultValues: {
      status: "ACTIVE",
    },
  });

  const onSubmit = async (data: PromoCodeFormValues) => {
    console.log("Form Data:", data);

    // example API call
    // await fetch("/api/promocode", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    // });
  };

  return (
    <div className="">
      {/* <h2 className="text-xl font-semibold mb-6">Manage Promo Code</h2> */}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Code */}
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
                    <SelectItem value="ACTIVE">Active</SelectItem>
                    <SelectItem value="PAUSED">Paused</SelectItem>
                    <SelectItem value="INACTIVE">Inactive</SelectItem>
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
