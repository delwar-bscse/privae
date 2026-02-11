import { ArrowUpRight } from 'lucide-react';

export default function KpiRight() {

  return (
    <div className="w-full px-2 py-3 bg-[#F2F2F2] rounded-lg font-sans text-gray-700 shadow-sm">
      {/* Header */}
      <h3 className="text-gray-400 text-sm xl:text-base">
        Total Revenue
      </h3>

      {/* Main Value */}
      <div className="text-xl text-gray-700 font-bold tracking-tight">
        $1,289,280
      </div>

      {/* Growth Metric */}
      <div className="flex xl:items-center gap-1">
        <div className="flex items-center">
          <ArrowUpRight className="text-green-500 w-3 xl:w-4 h-3 xl:h-4" strokeWidth={1} />
          <span className="text-green-500 text-[10px] xl:text-xs">9.48%</span>
        </div>
        <span className="text-gray-600 text-[10px] xl:text-xs">higher than last week</span>
      </div>
    </div>
  );
}