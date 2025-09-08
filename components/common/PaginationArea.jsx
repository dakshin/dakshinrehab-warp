"use client";
import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const PaginationArea = ({ totalPages = 3, searchParams }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParamsObj = useSearchParams();

  const currentPage = searchParams?.page
    ? parseInt(searchParams.page, 10)
    : parseInt(searchParamsObj.get("page") ?? "1", 10);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    const params = new URLSearchParams(searchParamsObj.toString());
    params.set("page", page.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="pagination-area">
      <ul className="pagination flex space-x-2">
        <li
          className={`cursor-pointer ${
            currentPage === 1 ? "opacity-50 pointer-events-none" : ""
          }`}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Prev
        </li>
        {[...Array(totalPages)].map((_, index) => (
          <li
            key={index}
            className={`cursor-pointer ${
              currentPage === index + 1 ? "active font-bold" : ""
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </li>
        ))}
        <li
          className={`cursor-pointer ${
            currentPage === totalPages ? "opacity-50 pointer-events-none" : ""
          }`}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </li>
      </ul>
    </div>
  );
};

export default PaginationArea;
