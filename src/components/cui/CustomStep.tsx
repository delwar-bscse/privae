/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useUpdateMultiSearchParams } from "@/hooks/useUpdateMultiSearchParams";
import { cn } from "@/lib/utils";
import { StepDataType } from "@/types/type";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

const CustomStepSuspense = ({
  stepDatas,
  status = "step",
  className,
}: {
  stepDatas: StepDataType[];
  status?: string;
  className?: string;
}) => {
  const updateMultipleSearchParams = useUpdateMultiSearchParams();
  const searchParams = useSearchParams();
  // const router = useRouter();

  // Get the current step from the search params, defaulting to the first step if not set
  const currentStep = searchParams.get(status);
  useEffect(() => {
    if (!currentStep) {
      updateMultipleSearchParams({ [status]: stepDatas[0].title, page: null, query: null });
    }
  }, []);

  // Style handling for the active step
  const handleStyle = (label?: string) => {
    return `  py-1 hover:text-gray-50 hover:bg-[#272727] px-3 text-sm rounded-sm cursor-pointer transition-colors duration-500 ${currentStep === label ? "bg-[#272727] text-gray-50" : "text-gray-700 bg-[#F2F2F2]"
      }`;
  };

  // Handle step change when a user clicks on a step
  const handleStepChange = (label: string) => {
    updateMultipleSearchParams({ [status]: label, page: null, query: null });
  };

  return (
    <div>
      <div>
        <div>
          <ul className="flex relative z-10 gap-2">
            {stepDatas.map((item) => (
              <li
                key={item.id}
                onClick={() => handleStepChange(item.title)}
                className={cn(`${handleStyle(item.title)}`, className)}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default function CustomStep({
  stepDatas,
  className,
  status = "step",
}: {
  stepDatas: StepDataType[];
  className?: string;
  status?: string;
}) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CustomStepSuspense stepDatas={stepDatas} status={status} className={className} />
    </Suspense>
  );
}
