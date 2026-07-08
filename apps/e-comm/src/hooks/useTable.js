import { useMemo } from "react";
import useSorting from "./useSorting";
import usePagination from "./usePagination";
import { sortData, paginateData } from "../util";

function useTable(data) {
  const { sortConfig, handleSort } = useSorting();

  const { currentPage, setCurrentPage, pageSize, setPageSize } =
    usePagination();

  const sortedData = useMemo(() => {
    return sortData(data, sortConfig);
  }, [data, sortConfig]);

  const paginatedData = useMemo(() => {
    return paginateData(sortedData, currentPage, pageSize);
  }, [sortedData, currentPage, pageSize]);

  return {
    data: paginatedData,
    totalRecords: sortedData.length,
    sortConfig,
    handleSort,
    currentPage,
    pageSize,
    setCurrentPage,
    setPageSize,
  };
}

export default useTable;
