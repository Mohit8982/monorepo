import TableCell from "./TableCell";

function TableRow({ row, columns }) {
  return (
    <tr>
      {columns.map((column) => (
        <TableCell key={column.key} row={row} column={column} />
      ))}
    </tr>
  );
}

export default TableRow;
