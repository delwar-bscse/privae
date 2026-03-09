/* eslint-disable @typescript-eslint/no-explicit-any */
import KpiLeft from "@/components/pages/dashboard/KpiLeft";
import Shapshot from "../../components/pages/dashboard/Shapshot";
import KpiRight from "@/components/pages/dashboard/KpiRight";
import { StepDataType } from "@/types/type";
import CustomStep from "@/components/cui/CustomStep";
import { PopoverDemo } from "@/components/cui/CalenderPopover";
import { myFetch } from "@/utils/myFetch";

function toKebabCase(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-");
}

export default async function Home({ searchParams }: { searchParams: any }) {
  const { startDate, endDate, step } = await searchParams;
  // const stepDatas: StepDataType[] = [
  //   { id: 1, title: "Revenue" },
  //   { id: 2, title: "Gross Margin" },
  //   { id: 3, title: "Orders" },
  //   { id: 4, title: "Average Booking Length" },
  //   { id: 5, title: "New Users" },
  //   { id: 6, title: "New Chefs" },
  // ];

  const stepDatas: StepDataType[] = [
    { id: 1, title: "Revenue" },
    { id: 2, title: "Gross Margin" },
    { id: 3, title: "Orders" },
    { id: 4, title: "Avg Booking Length" },
    { id: 5, title: "New Users" },
    { id: 6, title: "New Chefs" },
  ];

  const queryParams = new URLSearchParams({
    ...(startDate ? { startDate: startDate } : {}),
    ...(endDate ? { endDate: endDate } : {})
  });

  const resSummary: any = await myFetch(`/admin/summary?${queryParams.toString()}`, { method: "GET" });
  // console.log("Summary : ", resSummary);

  const queryParamsGraph = new URLSearchParams({
    ...(step ? { tags: toKebabCase(step) } : { tags: "revenue" })
  })
  const resGraph = await myFetch(`/admin/summary/graph?${queryParamsGraph.toString()}`, { method: "GET" });
  const grapsValue = resGraph?.data?.map((item: any) => {
    return { label: item?.label, value: item?.value };
  });
  // console.log("Graph : ", resGraph);
  console.log("Graph : ", grapsValue);

  return (
    <div>
      <div className="px-2 pb-4">
        <PopoverDemo />
      </div>
      <div className="px-2 flex gap-3 xl:gap-4">
        <div>
          <KpiLeft analytic={{ title: "Total Revenue", value: resSummary?.data?.grossMargin, growth: "9.48%" }} />
        </div>
        <div className="flex-1 grid grid-cols-4 gap-3 xl:gap-4">
          <KpiRight analytic={{ title: "Total Gross Margin", value: resSummary?.data?.grossMargin, growth: "9.48%" }} />
          <KpiRight analytic={{ title: "# of Orders", value: resSummary?.data?.totalOrders, growth: "9.48%" }} />
          <KpiRight analytic={{ title: "# of Users", value: resSummary?.data?.totalUsers, growth: "9.48%" }} />
          <KpiRight analytic={{ title: "# of Chefs", value: resSummary?.data?.totalChef, growth: "9.48%" }} />
          <KpiRight analytic={{ title: "Average Bookings per Week", value: resSummary?.data?.avgBooking, growth: "9.48%" }} />
          <KpiRight analytic={{ title: "Average Revenue per Booking", value: resSummary?.data?.avgRevineue, growth: "9.48%" }} />
          <KpiRight analytic={{ title: "Average Booking Length", value: resSummary?.data?.avgBookingLength, growth: "9.48%" }} />
          <KpiRight analytic={{ title: "Average Dishes per Booking", value: resSummary?.data?.avgDishesPerBooking, growth: "9.48%" }} />
        </div>
      </div>
      <div className="pt-4 space-y-4 px-2">
        <p className="font-bold text-2xl text-gray-800">Snapshot</p>
        <CustomStep stepDatas={stepDatas} status="step" />
        <Shapshot grapsValue={grapsValue} />
      </div>
    </div>
  )
}