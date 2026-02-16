"use client";

import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// Mock data reflecting the upward trend in your image
const data = [
  { day: 'Mon', value: 0 }, { day: '', value: 600 }, { day: '', value: 500 }, { day: '', value: 800 },
  { day: 'Tue', value: 1200 }, { day: '', value: 1500 }, { day: '', value: 1000 }, { day: '', value: 1100 },
  { day: 'Wed', value: 1900 }, { day: '', value: 1800 }, { day: '', value: 2100 }, { day: '', value: 1900 },
  { day: 'Thu', value: 1600 }, { day: '', value: 1400 }, { day: '', value: 1800 }, { day: '', value: 2000 },
  { day: 'Fri', value: 2400 }, { day: '', value: 2100 }, { day: '', value: 2300 }, { day: '', value: 2000 },
  { day: 'Sat', value: 2700 }, { day: '', value: 2600 }, { day: '', value: 2500 }, { day: '', value: 2800 },
  { day: 'Sun', value: 3300 }, { day: '', value: 2800 },
];

const Shapshot = () => {
  return (
    <div className="w-full h-100 p-6 bg-[#f5f5f5] rounded-3xl shadow-sm">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <defs>
            {/* Gradient matching the orange fill in the image */}
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ff7a45" stopOpacity={0.9} />
              <stop offset="95%" stopColor="#ff7a45" stopOpacity={.4} />
            </linearGradient>
          </defs>
          
          <CartesianGrid 
            vertical={false} 
            stroke="#e0e0e0" 
            strokeDasharray="0" 
          />
          
          <XAxis 
            dataKey="day" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#888', fontSize: 12 }}
            dy={10}
          />
          
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#888', fontSize: 12 }}
            tickFormatter={(value) => value.toLocaleString()}
          />
          
          <Tooltip 
            contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
          />

          <Area
            type="monotone"
            dataKey="value"
            stroke="#ff7a45"
            strokeWidth={2.5}
            fillOpacity={1}
            fill="url(#colorValue)"
            animationDuration={1500}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Shapshot;