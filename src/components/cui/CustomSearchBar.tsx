"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useDebouncedCallback } from "use-debounce";
import { useUpdateMultiSearchParams } from "@/hooks/useUpdateMultiSearchParams";
import { useState } from "react";

export function CustomSearchBar({ placeholder = "Search here..." }: { placeholder?: string }) {
  const [search, setSearch] = useState<string>("");
  const updateMultipleSearchParams = useUpdateMultiSearchParams();

  const handleSearch = useDebouncedCallback((term: string) => {
    setSearch(term);
    updateMultipleSearchParams({ query: term, page: null });
  }, 300);



  return (
    <div className="relative w-full group">
      <Search className="absolute left-1.5 top-1/2 h-6 w-6 transform -translate-y-1/2 text-gray-400" strokeWidth={1} />
      <Input
        className="w-full rounded-full bg-gray-50 hover:bg-gray-200 pl-12 pr-2 h-9 focus-visible:ring-0 focus-visible:ring-gray-300 font-semibold text-2xl transition-colors duration-300 placeholder:text-gray-400"
        placeholder={placeholder}
        type="search"
        defaultValue={search}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
    </div>
  );
}