"use client";

import { useForm, Controller } from "react-hook-form";
import MultiSelect from "@/components/form/MultiSelect";
import { KitchenPresetFormValues } from "@/types/type";

const pansOptions = [
  "Large pot",
  "Small pot",
  "Frying pan",
  "Saucepan",
];

const toolsOptions = [
  "Sharp knife",
  "Cutting board",
  "Spatula",
  "Tongs",
];

const applianceOptions = [
  "Stove-top",
  "Oven",
  "Microwave",
  "Grill (indoor or outdoor)",
  "Rice cooker",
];

const equipmentOptions = [
  "Sous-vide",
  "Blender",
  "Food processor",
];

export default function AddKitchenPreset() {

  const {
    register,
    handleSubmit,
    control,
  } = useForm<KitchenPresetFormValues>({
    defaultValues: {
      name: "",
      description: "",
      pansAndPots: [],
      tools: [],
      cookingAppliances: [],
      specialEquipment: [],
    },
  });

  const onSubmit = (data: KitchenPresetFormValues) => {
    console.log(data);
  };

  return (

    <div className="h-full max-h-150 overflow-y-auto hide-scrollbar">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-3xl mx-auto space-y-2"
      >

        {/* Name */}
        <div>
          <label className="text-sm font-medium">
            Name *
          </label>

          <input
            {...register("name", { required: true })}
            className="w-full mt-1 bg-gray-100 rounded-xl px-3 py-3 outline-none"
          />
        </div>

        {/* Description */}
        <div>
          <label className="text-sm font-medium">
            Description *
          </label>

          <input
            {...register("description", { required: true })}
            className="w-full mt-1 bg-gray-100 rounded-xl px-3 py-3 outline-none"
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4">

          {/* Pans */}
          <Controller
            control={control}
            name="pansAndPots"
            render={({ field }) => (
              <MultiSelect
                label="Pans & pots"
                options={pansOptions}
                value={field.value}
                onChange={field.onChange}
                required
              />
            )}
          />

          {/* Tools */}
          <Controller
            control={control}
            name="tools"
            render={({ field }) => (
              <MultiSelect
                label="Tools"
                options={toolsOptions}
                value={field.value}
                onChange={field.onChange}
                required
              />
            )}
          />

          {/* Appliances */}
          <Controller
            control={control}
            name="cookingAppliances"
            render={({ field }) => (
              <MultiSelect
                label="Cooking Appliances"
                options={applianceOptions}
                value={field.value}
                onChange={field.onChange}
                required
              />
            )}
          />

          {/* Equipment */}
          <Controller
            control={control}
            name="specialEquipment"
            render={({ field }) => (
              <MultiSelect
                label="Special Equipment"
                options={equipmentOptions}
                value={field.value}
                onChange={field.onChange}
                required
              />
            )}
          />

        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full mt-6 bg-linear-to-r from-gray-800 to-gray-900 text-white py-4 rounded-xl font-semibold"
        >
          Add kitchen-Preset
        </button>

      </form>
    </div>
  );
}
