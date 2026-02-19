"use client"

import { useSearchParams } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";
import { Suspense } from "react";
import { useUpdateSearchParams } from "@/hooks/useUpdateSearchParams";
// import { useEffect, useState } from "react";

const MAX_PAGE_WINDOW = 5;

function MyPaginationSuspense({ TOTAL_PAGES = 1, qryName = "page" }: { TOTAL_PAGES?: number, qryName?: string }) {
  const updateSearchParams = useUpdateSearchParams()
  const searchParams = useSearchParams();

  // Get current page from URL or default to 1
  const currentPage = parseInt(searchParams.get(qryName) || '1');

  // Calculate window range (same logic as before)
  const startPage = Math.max(1, currentPage - MAX_PAGE_WINDOW + 1);
  const endPage = Math.min(TOTAL_PAGES, startPage + MAX_PAGE_WINDOW - 1);

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  // Update both URL and internal state
  const handlePageChange = (newPage: number) => {
    updateSearchParams(qryName, newPage.toString());
  };

  return (
    <div className="relative flex items-center justify-between">
      <p className=" text-gray-500 font-semibold ">{`Showing ${currentPage} to ${TOTAL_PAGES} pages`}</p>
      <div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                isActive={currentPage === 1}
                aria-disabled={currentPage === 1}
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              />
            </PaginationItem>

            {pageNumbers.map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  isActive={currentPage === page}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                isActive={currentPage === TOTAL_PAGES}
                aria-disabled={currentPage === TOTAL_PAGES}
                onClick={() => handlePageChange(Math.min(TOTAL_PAGES, currentPage + 1))}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}

export default function CustomPagination({ TOTAL_PAGES, qryName = "page" }: { TOTAL_PAGES?: number, qryName?: string }) {
  return (
    <Suspense fallback={<div>Loading Pagination...</div>}>
      <MyPaginationSuspense TOTAL_PAGES={TOTAL_PAGES} qryName={qryName} />
    </Suspense>
  );
}