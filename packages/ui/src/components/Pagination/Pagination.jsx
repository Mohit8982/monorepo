const Pagination = ({ settings }) => {
  console.log(settings);

  return (
    <nav className="my-8 flex flex-wrap items-center justify-center gap-3">
      <button
        className="h-10 min-w-[40px] cursor-not-allowed rounded-md border border-gray-300 bg-white px-4 text-sm font-medium opacity-50 transition-all"
        disabled
      >
        &laquo; Prev
      </button>

      <ul className="m-0 flex list-none items-center gap-2 p-0">
        <li>
          <button className="h-10 min-w-[40px] rounded-md bg-gradient-to-br from-slate-400 to-emerald-300 px-4 text-sm font-medium text-white transition-all">
            1
          </button>
        </li>

        <li>
          <span className="px-1.5 text-lg text-gray-500">...</span>
        </li>

        <li>
          <button className="h-10 min-w-[40px] rounded-md border border-gray-300 bg-white px-4 text-sm font-medium transition-all hover:border-blue-500 hover:bg-gray-100">
            5
          </button>
        </li>

        <li>
          <span className="px-1.5 text-lg text-gray-500">...</span>
        </li>

        <li>
          <button className="h-10 min-w-[40px] rounded-md border border-gray-300 bg-white px-4 text-sm font-medium transition-all hover:border-blue-500 hover:bg-gray-100">
            10
          </button>
        </li>
      </ul>

      <button
        className="h-10 min-w-[40px] cursor-not-allowed rounded-md border border-gray-300 bg-white px-4 text-sm font-medium opacity-50 transition-all"
        disabled
      >
        Next &raquo;
      </button>
    </nav>
  );
};

export default Pagination;
