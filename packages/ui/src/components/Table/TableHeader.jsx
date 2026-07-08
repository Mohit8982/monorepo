function TableHeader({ columns, sortConfig, onSort }) {
  const handleSort = (column) => {
    if (!column.sortable) return;

    onSort(column.key);
  };

  const getSortIcon = (columnKey) => {
    if (sortConfig.key !== columnKey) return "";

    return sortConfig.direction === "asc" ? "↑" : "↓";
  };

  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th
            key={column.key}
            className={`${column.sortable ? "sortable-column" : ""} ${
              column.className || ""
            }`}
            style={{ width: column.width }}
            onClick={() => handleSort(column)}
          >
            <div className="header-content">
              <span>{column.title}</span>

              <span className="sort-icon">{getSortIcon(column.key)}</span>
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
