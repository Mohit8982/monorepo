// TableBody.jsx

import TableRow from "./TableRow";
import TableEmpty from "./TableEmpty";
import TableSkeleton from "./TableSkeleton";

function TableBody({ data, columns, loading }) {
  if (loading) {
    return (
      <tbody>
        <TableSkeleton rows={5} columns={columns.length} />
      </tbody>
    );
  }

  if (!data.length) {
    return (
      <tbody>
        <TableEmpty />
      </tbody>
    );
  }

  return (
    <tbody>
      {data.map((row) => (
        <TableRow key={row.id} row={row} columns={columns} />
      ))}
    </tbody>
  );
}

export default TableBody;
