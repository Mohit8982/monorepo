import PaginationBar from "./PaginationBar";

const Pagination = (args) => {
  const { currentPage, totalPages, onPageChange } = args;

  return (
    <div>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <PaginationBar
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
      <span>
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
