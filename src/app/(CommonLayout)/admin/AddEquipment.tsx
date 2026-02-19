/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm, Controller } from "react-hook-form";
import SingleSelect from "@/components/form/SingleSelect";
import { useEffect } from "react";
import { myFetch } from "@/utils/myFetch";
import { revalidate } from "@/helpers/revalidateHelper";
import { closedCustomModal } from "@/helpers/closedCustomModal";

type AddEquipmentFormValues = {
  name: string;
  category: string;
};

// const categoryOptions =  [
//   "Cooking Appliances",
//   "Pots & Pans",
//   "Tools",
//   "Special Equipment"
// ];

export default function AddEquipment({equipment, cousineOptions}: {equipment?: any, cousineOptions?: any}) {

  const categoryOptions = cousineOptions?.map((item: any) => item.name);

  const {
    register,
    handleSubmit,
    control,
    reset
  } = useForm<AddEquipmentFormValues>({
    defaultValues: {
      name: "",
      category: "",
    },
  });

  useEffect(() => {
    if (equipment) {
      reset({
        name: equipment.name,
        category: equipment.category,
      });
    }
  }, [equipment]);

  const onSubmit = async(data: AddEquipmentFormValues) => {
    const selectCategory = cousineOptions?.find((item: any) => item.name === data.category);
    console.log("Select Category:", selectCategory);

    const formDate = new FormData();
    formDate.append("name", data.name);
    formDate.append("category", selectCategory._id);

    let url = `/equipment`
    if(equipment) { url = `/equipment/${equipment.id}` }
    let method: "POST" | "PATCH" = "POST";
    if(equipment) { method = "PATCH" }

    const res = await myFetch(`${url}`, { method: method, body: formDate });
    console.log("Response Data:", res);

    if (res?.success) {
      revalidate("admin_equipment");
      closedCustomModal();
    }
  };

  return (

    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl mx-auto p-6 space-y-6"
    >

      {/* Name */}
      <div>

        <label className="text-sm font-medium text-gray-800">
          Name *
        </label>

        <input
          {...register("name", {
            required: true,
          })}
          className="w-full mt-1 bg-gray-100 rounded-xl px-4 py-4 outline-none"
          placeholder="Enter name"
        />

      </div>

      {/* Preference Category */}
      <Controller
        name="category"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <SingleSelect
            label="Preference Category"
            options={categoryOptions}
            value={field.value}
            onChange={field.onChange}
            required
            placeholder="Select category"
          />
        )}
      />

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-linear-to-r from-gray-800 to-gray-900 text-white py-4 rounded-xl font-semibold"
      >
        Add equipment
      </button>

    </form>
  );
}
