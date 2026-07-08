import { useMemo } from "react";
import { getPageNumbers } from "../../util";

function TablePagination({
  currentPage,
  totalRecords,
  pageSize,
  onPageChange,
  onPageSizeChange,
}) {
  const totalPages = Math.ceil(totalRecords / pageSize);

  const startRecord = totalRecords === 0 ? 0 : (currentPage - 1) * pageSize + 1;

  const endRecord = Math.min(currentPage * pageSize, totalRecords);

  const pages = useMemo(() => {
    return getPageNumbers(currentPage, totalPages);
  }, [currentPage, totalPages]);

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageSizeChange = (e) => {
    onPageSizeChange(Number(e.target.value));
    onPageChange(1);
  };

  return (
    <div className="table-pagination">
      <div className="pagination-info">
        Showing {startRecord} - {endRecord} of {totalRecords}
      </div>

      {totalPages > 1 && (
        <div className="pagination-controls">
          <button onClick={handlePrevious} disabled={currentPage === 1}>
            Previous
          </button>

          <div className="page-numbers">
            {pages.map((page, index) => {
              if (page === "...") {
                return (
                  <span key={`ellipsis-${index}`} className="ellipsis">
                    ...
                  </span>
                );
              }

              return (
                <button
                  key={page}
                  className={page === currentPage ? "active-page" : ""}
                  onClick={() => onPageChange(page)}
                >
                  {page}
                </button>
              );
            })}
          </div>

          <button onClick={handleNext} disabled={currentPage === totalPages}>
            Next
          </button>

          <div className="page-size">
            <label>Rows per page:</label>

            <select value={pageSize} onChange={handlePageSizeChange}>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
}

export default TablePagination;
