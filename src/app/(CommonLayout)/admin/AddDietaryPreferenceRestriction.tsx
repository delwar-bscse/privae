/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm, Controller } from "react-hook-form";
import SingleSelect from "@/components/form/SingleSelect";
import { myFetch } from "@/utils/myFetch";
import { useEffect } from "react";
import { toast } from "sonner";
import { revalidate } from "@/helpers/revalidateHelper";
import { closedCustomModal } from "@/helpers/closedCustomModal";

export enum EDietaryRestriction {
  ALLERGIES_INTOLERANCE = 'Allergies & Intolerance',
  RELIGIOUS_ETHICAL = 'Religious & Ethical Restrictions',
  PREFERENCES_LIFESTYLE = 'Preferences & Lifestyle'
}

type AddEquipmentFormValues = {
  name: string;
  category: EDietaryRestriction;
};

// const dietaryOptions = [
//   "Allergens & Intolerance",
//   "Religious & Ethical Restrictions",
//   "Preferences & Lifestyle",
// ];
const dietaryOptions = Object.values(EDietaryRestriction);



export default function AddDietaryPreferenceRestriction({ dietary }: { dietary?: any }) {

  const {
    register,
    handleSubmit,
    control,
    reset
  } = useForm<AddEquipmentFormValues>({
    defaultValues: {
      name: "",
      category: EDietaryRestriction.ALLERGIES_INTOLERANCE,
    },
  });

  useEffect(() => {
    if (dietary) {
      reset({
        name: dietary.name,
        category: dietary.category,
      });
    }
  }, [dietary]);

  const onSubmit = async (data: AddEquipmentFormValues) => {
    //console.log("Form Data:", data);
    const payload = {
      name: data.name,
      category: data.category
    }

    let url = `/dietary`
    if (dietary) { url = `/dietary/${dietary.id}` }
    let method: "POST" | "PATCH" = "POST";
    if (dietary) { method = "PATCH" }

    const res = await myFetch(`${url}`, { method: method, body: payload });
    //console.log("Response Data:", res);

    if (res?.success) {
      const message = dietary ? "Dietary preference restriction updated successfully" : "Dietary preference restriction added successfully";
      toast.success(message);
      revalidate("admin_dietary");
      closedCustomModal();
    } else {
      const message = dietary ? "Failed to update dietary preference restriction" : "Failed to add dietary preference restriction";
      toast.error(res.message || message);
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
            options={dietaryOptions}
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
