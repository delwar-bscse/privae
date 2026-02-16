"use client";

import { useState, useRef, useEffect } from "react";
import { Check, ChevronDown } from "lucide-react";

type Props = {
  label: string;
  options: string[];
  value?: string;
  onChange: (value: string) => void;
  required?: boolean;
  placeholder?: string;
};

export default function SingleSelect({
  label,
  options,
  value,
  onChange,
  required,
  placeholder,
}: Props) {

  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);

  }, []);

  return (
    <div ref={ref}>

      {/* Label */}
      <label className="text-sm font-medium text-gray-800">
        {label}
        {required && (
          <span className="text-red-500"> *</span>
        )}
      </label>

      {/* Trigger */}
      <div
        onClick={() => setOpen(!open)}
        className="mt-1 flex items-center justify-between bg-gray-100 rounded-xl px-4 py-4 cursor-pointer"
      >

        {value ? (
          <span className="bg-white px-3 py-1 rounded-lg text-sm shadow-sm">
            {value}
          </span>
        ) : (
          <span className="text-gray-400">
            {placeholder || `Select ${label}`}
          </span>
        )}

        <ChevronDown size={18} />

      </div>

      {/* Dropdown */}
      {open && (
        <div className="mt-2 bg-white rounded-xl shadow-md border overflow-hidden">

          {options.map(option => {

            const selected = value === option;

            return (
              <div
                key={option}
                onClick={() => {
                  onChange(option);
                  setOpen(false);
                }}
                className="flex items-center justify-between px-4 py-4 hover:bg-gray-50 cursor-pointer"
              >

                <span>{option}</span>

                <div
                  className={`w-5 h-5 rounded-full border flex items-center justify-center
                  ${selected ? "bg-black border-black" : "border-gray-300"}
                  `}
                >
                  {selected && (
                    <Check
                      size={14}
                      className="text-white"
                    />
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
