const Pagination = ({ settings }) => {
  console.log(settings);

  return (
    <nav className="pagination-container">
      <button className="pagination-arrow" disabled>
        &laquo; Prev
      </button>
      <ul className="pagination-list">
        <li>
          <button className={`pagination-item active`}>1</button>
        </li>
        <li>
          <span className="pagination-dots">...</span>
        </li>
        <li>
          <button className={`pagination-item`}>5</button>
        </li>
        <li>
          <span className="pagination-dots">...</span>
        </li>
        <li>
          <button className={`pagination-item`}>10</button>
        </li>
      </ul>
      <button className="pagination-arrow" disabled>
        Next &raquo;
      </button>
    </nav>
  );
};

export default Pagination;
