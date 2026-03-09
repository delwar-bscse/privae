/* eslint-disable @typescript-eslint/no-explicit-any */
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
// const data = [
//   { label: 'Mon', value: 0 }, { label: '', value: 600 }, { label: '', value: 500 }, { label: '', value: 800 },
//   { label: 'Tue', value: 1200 }, { label: '', value: 1500 }, { label: '', value: 1000 }, { label: '', value: 1100 },
//   { label: 'Wed', value: 1900 }, { label: '', value: 1800 }, { label: '', value: 2100 }, { label: '', value: 1900 },
//   { label: 'Thu', value: 1600 }, { label: '', value: 1400 }, { label: '', value: 1800 }, { label: '', value: 2000 },
//   { label: 'Fri', value: 2400 }, { label: '', value: 2100 }, { label: '', value: 2300 }, { label: '', value: 2000 },
//   { label: 'Sat', value: 2700 }, { label: '', value: 2600 }, { label: '', value: 2500 }, { label: '', value: 2800 },
//   { label: 'Sun', value: 3300 }, { label: '', value: 2800 },
// ];

const Shapshot = ({grapsValue}:{grapsValue: any}) => {
  return (
    <div className="w-full h-100 p-6 bg-[#f5f5f5] rounded-3xl shadow-sm">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={grapsValue} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
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
            dataKey="label" 
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