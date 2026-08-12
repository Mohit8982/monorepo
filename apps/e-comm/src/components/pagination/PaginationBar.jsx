const PaginationBar = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div>
      <ul className="m-0 flex list-none items-center gap-2 p-0">
        <li>
          <button className="h-10 min-w-[40px] rounded-md bg-gradient-to-br from-slate-400 to-emerald-300 px-4 text-sm font-medium text-white transition-all">
            1
          </button>
        </li>
      </ul>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          disabled={currentPage === page}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default PaginationBar;
