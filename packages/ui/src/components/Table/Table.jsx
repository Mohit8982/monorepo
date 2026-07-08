import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TablePagination from "./TablePagination";

import useTable from "../../hooks/useTable";

function Table({ columns = [], data = [], loading = false }) {
  const {
    data: tableData,
    totalRecords,
    sortConfig,
    handleSort,
    currentPage,
    pageSize,
    setCurrentPage,
    setPageSize,
  } = useTable(data);

  return (
    <div className="table-container">
      <table className="table">
        <TableHeader
          columns={columns}
          sortConfig={sortConfig}
          onSort={handleSort}
        />

        <TableBody columns={columns} data={tableData} loading={loading} />
      </table>

      <TablePagination
        currentPage={currentPage}
        totalRecords={totalRecords}
        pageSize={pageSize}
        onPageChange={setCurrentPage}
        onPageSizeChange={setPageSize}
      />
    </div>
  );
}

export default Table;
