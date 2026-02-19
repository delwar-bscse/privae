"use client";

import { UseFormRegister, FieldValues, Path } from "react-hook-form";

type Props<T extends FieldValues> = {
  title: string;
  description?: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  suffix?: string;
};

export default function FeeSection<T extends FieldValues>({
  title,
  description,
  name,
  register,
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

      </div>
    </div>
  );
}
