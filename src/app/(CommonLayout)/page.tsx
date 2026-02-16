import KpiLeft from "@/components/pages/dashboard/KpiLeft";
import Shapshot from "../../components/pages/dashboard/Shapshot";
import KpiRight from "@/components/pages/dashboard/KpiRight";
import { StepDataType } from "@/types/type";
import CustomStep from "@/components/cui/CustomStep";

export default function Home() {
  const stepDatas: StepDataType[] = [
    { id: 1, title: "Revenue" },
    { id: 2, title: "Gross Margin" },
    { id: 3, title: "Orders" },
    { id: 4, title: "Average Booking Length" },
    { id: 5, title: "New Users" },
    { id: 6, title: "New Chefs" },
  ];
  
  return (
    <div>
      <div className="px-2 flex gap-3 xl:gap-4">
        <div>
          <KpiLeft />
        </div>
        <div className="flex-1 grid grid-cols-4 gap-3 xl:gap-4">
          <KpiRight />
          <KpiRight />
          <KpiRight />
          <KpiRight />
          <KpiRight />
        </div>
      </div>
      <div className="pt-4 space-y-4 px-2">
        <p className="font-bold text-2xl text-gray-800">Snapshot</p>
        <CustomStep stepDatas={stepDatas} status="step" />
        <Shapshot />
      </div>
    </div>
  )
}