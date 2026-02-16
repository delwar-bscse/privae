"use client";

import { useForm, Controller } from "react-hook-form";
import SingleSelect from "@/components/form/SingleSelect";

type AddEquipmentFormValues = {
  name: string;
  preferenceCategory: string;
};

const categoryOptions =  [
  "Cooking Appliances",
  "Pots & Pans",
  "Tools",
  "Special Equipment"
];

export default function AddEquipment() {

  const {
    register,
    handleSubmit,
    control,
  } = useForm<AddEquipmentFormValues>({
    defaultValues: {
      name: "",
      preferenceCategory: "",
    },
  });

  const onSubmit = (data: AddEquipmentFormValues) => {
    console.log("Form Data:", data);
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
        name="preferenceCategory"
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
