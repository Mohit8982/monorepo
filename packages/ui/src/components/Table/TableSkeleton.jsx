// TableSkeleton.jsx

function TableSkeleton({ rows = 5, columns = 5 }) {
  return (
    <>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <tr key={rowIndex}>
          {Array.from({
            length: columns,
          }).map((_, colIndex) => (
            <td key={colIndex}>
              <div className="table-skeleton" />
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}

export default TableSkeleton;
