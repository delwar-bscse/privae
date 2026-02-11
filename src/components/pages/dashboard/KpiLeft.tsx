import { ArrowUpRight } from 'lucide-react';

export default function KpiLeft() {
  return (
    <div className="w-60 px-2 py-3 bg-[#222222] rounded-lg font-sans text-white shadow-xl">
      {/* Header */}
      <h3 className="text-gray-300 text-lg font-medium mb-2">
        Total Revenue
      </h3>

      {/* Main Value */}
      <div className="text-2xl font-bold tracking-tight mb-4">
        $1,289,280
      </div>

      {/* Growth Metric */}
      <div className="flex items-center gap-1 mb-4">
        <ArrowUpRight className="text-green-500 w-5 h-5" strokeWidth={3} />
        <span className="text-green-500 text-sm">9.48%</span>
        <span className="text-gray-300 text-sm">higher than last week</span>
      </div>

      {/* Sparkline Graph (SVG) */}
      <div className="w-full h-16">
        <svg
          viewBox="0 0 100 50"
          className="w-full h-full overflow-visible"
          preserveAspectRatio="none"
        >
          <polyline
            fill="none"
            stroke="#F97316" // Tailwind orange-500
            strokeWidth="1"
            strokeLinejoin="round"
            strokeLinecap="round"
            points="0,35 5,28 10,32 15,22 20,38 25,25 30,30 35,20 40,32 45,28 50,22 55,26 60,18 65,25 70,20 75,10 80,15 85,8 90,12 94,8 100,10"
          />
        </svg>
      </div>
    </div>
  );
}