"use client";

import FeeSection from "@/components/form/FeeSection";
import { useForm } from "react-hook-form";

type PlatformFeesFormValues = {
  platformMargin: number;
  serviceFeePercent: number;
  serviceFeeFlat: number;
};

export default function PlatformFees() {

  const {
    register,
    handleSubmit,
    reset,
    getValues,
  } = useForm<PlatformFeesFormValues>({
    defaultValues: {
      platformMargin: 25,
      serviceFeePercent: 3.5,
      serviceFeeFlat: 5,
    },
  });

  const onSubmit = (data: PlatformFeesFormValues) => {
    console.log("Updated Fees:", data);
  };

  return (

    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md p-6 space-y-8"
    >

      {/* Header */}
      <h2 className="text-lg font-semibold">
        Platform Fees
      </h2>

      {/* Platform Margin */}
      <FeeSection<PlatformFeesFormValues>
        title="Platform Margin"
        description="Calculated: Chef's rate × (1 + Margin)"
        name="platformMargin"
        register={register}
        suffix="%"
        onCancel={() =>
          reset({
            ...getValues(),
          })
        }
      />

      {/* Service Fee Percent */}
      <FeeSection<PlatformFeesFormValues>
        title="Customer Service Fee"
        description="Added to Order Subtotal"
        name="serviceFeePercent"
        register={register}
        suffix="%"
        onCancel={() =>
          reset({
            ...getValues(),
          })
        }
      />

      {/* Service Fee Flat */}
      <FeeSection<PlatformFeesFormValues>
        title="Customer Service Fee"
        description="Subtracted from Order"
        name="serviceFeeFlat"
        register={register}
        suffix="$"
        onCancel={() =>
          reset({
            ...getValues(),
          })
        }
      />

    </form>

  );
}
