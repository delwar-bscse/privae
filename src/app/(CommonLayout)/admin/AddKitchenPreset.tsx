/* eslint-disable react-hooks/incompatible-library */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm, Controller } from "react-hook-form";
import MultiSelect from "@/components/form/MultiSelect";
import { KitchenPresetFormValues } from "@/types/type";
import { useEffect, useState } from "react";
import Image from "next/image";
import { kitchen00 } from "@/app/assets/assets";
import { RiEdit2Line } from "react-icons/ri";
import { myFetch } from "@/utils/myFetch";
import { closedCustomModal } from "@/helpers/closedCustomModal";
import { revalidate } from "@/helpers/revalidateHelper";
import { toast } from "sonner";

// const pansOptions = [
//   "Large pot",
//   "Small pot",
//   "Frying pan",
//   "Saucepan",
// ];

// const toolsOptions = [
//   "Sharp knife",
//   "Cutting board",
//   "Spatula",
//   "Tongs",
// ];

// const applianceOptions = [
//   "Stove-top",
//   "Oven",
//   "Microwave",
//   "Grill (indoor or outdoor)",
//   "Rice cooker",
// ];

// const equipmentOptions = [
//   "Sous-vide",
//   "Blender",
//   "Food processor",
// ];

export default function AddKitchenPreset({ options }: { options: any }) {
  const [preview, setPreview] = useState<string>("");

  const pansOptions = options?.pansOptions?.map((item: any) => item.name) || []
  const toolsOptions = options?.toolsOptions?.map((item: any) => item.name) || []
  const applianceOptions = options?.applianceOptions?.map((item: any) => item.name) || []
  const equipmentOptions = options?.equipmentOptions?.map((item: any) => item.name) || []

  const {
    register,
    handleSubmit,
    control,
    watch
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

  const fileImage = watch("image");

  useEffect(() => {
    if (!fileImage?.length) return;
    const file = fileImage[0];
    const previewUrl = URL.createObjectURL(file);
    setPreview(previewUrl);
    // return () => URL.revokeObjectURL(previewUrl);
  }, [fileImage]);

  const onSubmit = async(data: KitchenPresetFormValues) => {
    //console.log(data);
    const pansOptions = options?.pansOptions?.filter((item: any) => data.pansAndPots.includes(item.name)) || []
    const toolsOptions = options?.toolsOptions?.filter((item: any) => data.tools.includes(item.name)) || []
    const applianceOptions = options?.applianceOptions?.filter((item: any) => data.cookingAppliances.includes(item.name)) || []
    const equipmentOptions = options?.equipmentOptions?.filter((item: any) => data.specialEquipment.includes(item.name)) || []
    const combinedOptions = [...pansOptions, ...toolsOptions, ...applianceOptions, ...equipmentOptions].map((item: any) => {
      return { _id: item._id, quantity: 1 }
    }) || [];

    // console.log("items : ", pansOptions, toolsOptions, applianceOptions, equipmentOptions)
    //console.log("items : ", combinedOptions)

    const formData = new FormData();
    formData.append("name", data.name);
    // formData.append("description", data.description);
    if (data.image?.[0]) {
      formData.append("image", data.image[0]);
    }
    formData.append("items", JSON.stringify(combinedOptions));
    // combinedOptions?.forEach((item: any) => {
    //   formData.append("items", JSON.stringify(item));
    // })

    const res = await myFetch("/equipment/kitchen", {
      method: "POST",
      body: formData,
    });
    console.log("Response Data:", res);

    if (res?.success) {
      revalidate("admin_kitchen_preset");
      closedCustomModal();
    }else{
      toast.error(res?.message);
    }

  };

  return (

    <div className="h-full max-h-150 overflow-y-auto hide-scrollbar">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-3xl mx-auto space-y-2"
      >
        {/* Image */}
        <div className="w-20 h-20 mx-auto relative">
          <Image
            src={preview || kitchen00}
            alt="user"
            width={80}
            height={80}
            className="w-20 h-20 object-contain rounded-full"
          />

          <input
            type="file"
            accept="image/*"
            id="addUserImageId"
            className="hidden"
            {...register("image")}
          />

          <button
            type="button"
            onClick={() =>
              document.getElementById("addUserImageId")?.click()
            }
            className="absolute bottom-0 right-0 bg-white size-6 flex items-center justify-center rounded-full shadow"
          >
            <RiEdit2Line size={14} />
          </button>
        </div>

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
