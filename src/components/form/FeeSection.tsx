"use client";

import { UseFormRegister, FieldValues, Path } from "react-hook-form";

type Props<T extends FieldValues> = {
  title: string;
  description?: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  onCancel: () => void;
  suffix?: string;
};

export default function FeeSection<T extends FieldValues>({
  title,
  description,
  name,
  register,
  onCancel,
  suffix,
}: Props<T>) {

  return (
    <div className="space-y-2">

      <div>
        <h3 className="font-medium text-gray-800">
          {`${title} ( ${suffix} )`}
        </h3>

        {description && (
          <p className="text-sm text-gray-500">
            {description}
          </p>
        )}
      </div>

      <div className="relative">

        <input
          type="number"
          step="0.01"
          {...register(name, {
            valueAsNumber: true,
          })}
          className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none"
        />
{/* 
        {suffix && (
          <span className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500">
            {suffix}
          </span>
        )} */}

      </div>

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

    </div>
  );
}
