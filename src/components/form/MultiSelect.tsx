"use client";

import { useState, useRef, useEffect } from "react";
import { Check, ChevronDown } from "lucide-react";

type Props = {
  label: string;
  options: string[];
  value: string[];
  onChange: (value: string[]) => void;
  required?: boolean;
};

export default function MultiSelect({
  label,
  options,
  value,
  onChange,
  required,
}: Props) {

  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // close outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  const toggleOption = (option: string) => {
    if (value.includes(option)) {
      onChange(value.filter(item => item !== option));
    } else {
      onChange([...value, option]);
    }
  };

  return (
    <div className="w-full" ref={ref}>

      {/* Label */}
      <label className="text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>

      {/* Trigger */}
      <div
        onClick={() => setOpen(!open)}
        className="mt-1 flex items-center justify-between rounded-xl bg-gray-100 px-3 py-3 cursor-pointer"
      >
        <div className="flex flex-wrap gap-2">

          {value.length === 0 && (
            <span className="text-gray-400">Select {label}</span>
          )}

          {value.map(item => (
            <span
              key={item}
              className="bg-white px-2 py-1 rounded-md text-sm shadow-sm"
            >
              {item}
            </span>
          ))}

        </div>

        <ChevronDown size={18} />
      </div>

      {/* Dropdown */}
      {open && (
        <div className="mt-2 bg-white border rounded-xl shadow-md overflow-hidden">

          {options.map(option => {

            const selected = value.includes(option);

            return (
              <div
                key={option}
                onClick={() => toggleOption(option)}
                className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 cursor-pointer"
              >

                <span>{option}</span>

                <div className={`w-5 h-5 rounded-full border flex items-center justify-center
                  ${selected ? "bg-black border-black" : "border-gray-300"}
                `}>
                  {selected && (
                    <Check size={14} className="text-white" />
                  )}
                </div>

              </div>
            );
          })}

        </div>
      )}

    </div>
  );
}
