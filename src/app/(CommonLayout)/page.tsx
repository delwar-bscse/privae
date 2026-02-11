import KpiLeft from "@/components/pages/dashboard/KpiLeft";
import Shapshot from "../../components/pages/dashboard/Shapshot";
import KpiRight from "@/components/pages/dashboard/KpiRight";

export default function Home() {
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
      <div>
        <Shapshot />
      </div>
    </div>
  )
}