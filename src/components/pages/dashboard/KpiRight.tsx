import { ArrowUpRight } from 'lucide-react';

export type Props = {
  title: string;
  value: string;
  growth: string;
}

export default function KpiRight({analytic}:{analytic:Props}) {

  return (
    <div className="w-full px-2 py-3 bg-[#F2F2F2] rounded-lg font-sans text-gray-700 shadow-sm">
      {/* Header */}
      <h3 className="text-gray-400 text-sm xl:text-base">
        {analytic.title}
      </h3>

      {/* Main Value */}
      <div className="text-xl text-gray-700 font-bold tracking-tight">
        {analytic.value}
      </div>

      {/* Growth Metric */}
      <div className="flex xl:items-center gap-1">
        <div className="flex items-center">
          <ArrowUpRight className="text-green-500 w-3 xl:w-4 h-3 xl:h-4" strokeWidth={1} />
          <span className="text-green-500 text-[10px] xl:text-xs">{analytic.growth}</span>
        </div>
        <span className="text-gray-600 text-[10px] xl:text-xs">higher than last week</span>
      </div>
    </div>
  );
}