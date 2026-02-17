/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/incompatible-library */
"use client";

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import Image from "next/image";
import { RiEdit2Line } from "react-icons/ri";

import { category00 } from "@/app/assets/assets";

type AddUserFormValues = {
  name: string;
  image?: FileList;
};


const AddCategory = () => {
  const [preview, setPreview] = useState<string>("");

  const {
    register,
    handleSubmit,
    watch,
    reset,
  } = useForm<AddUserFormValues>({
    defaultValues: {
      name: "",
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

  // Submit handler
  const onSubmit = async (data: AddUserFormValues) => {
    if (!data.image?.length) {
      toast.error("Please select an image");
      return;
    }

    try {
      console.log("Form Data:", data, data.image[0]);

      const formData = new FormData();

      formData.append("name", data.name);
      formData.append("image", data.image[0]);

      toast.success("User added successfully");

      reset();
      setPreview("");

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
        {/* Image */}
        <div className="w-20 h-20 mx-auto relative">
          <Image
            src={preview || category00}
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
        <div className="flex flex-col gap-1">
          <label className="text-gray-700">Category Name</label>
          <input
            type="text"
            placeholder="Enter name"
            {...register("name", { required: true })}
            className="authinput"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full mt-4 bg-[#272727] text-white py-3 rounded-xl font-semibold hover:bg-[#272727]/90 transition"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default AddCategory;
