// hooks/usePagination.js

import { useState } from "react";

function usePagination(initialPageSize = 10) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(initialPageSize);

  return {
    currentPage,
    setCurrentPage,
    pageSize,
    setPageSize,
  };
}

export default usePagination;
