"use client";

import InputList from "@/components/cui/InputList";
import { Controller, useForm } from "react-hook-form";

type AddCategoryFormValues = {
  name: string;
  subCategories: string[];
};



const AddCategory = () => {

  const {
    register,
    handleSubmit,
    control,
  } = useForm<AddCategoryFormValues>({
    defaultValues: {
      name: "",
      subCategories: [],
    },
  });


  // Submit handler
  const onSubmit = async (data: AddCategoryFormValues) => {
    console.log("Form Data:", data);
  };


  return (
    <>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 mt-4"
      >
        {/* Name */}
        <div className="flex flex-col gap-1">
          <label className="text-gray-700">Name</label>
          <input
            type="text"
            placeholder="Enter name"
            {...register("name", { required: true })}
            className="authinput"
          />
        </div>

        <Controller
          name="subCategories"
          control={control}
          render={({ field }) => (
            <InputList
              title="Sub-Category"
              list={field.value}
              setList={field.onChange}
            />
          )}
        />

        {/* Submit */}
        <button
          type="submit"
          className="w-full mt-10 bg-[#272727] text-white py-3 rounded-xl font-semibold hover:bg-[#272727]/90 transition"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default AddCategory;
