function TableCell({ row, column }) {
  const value = row[column.key];

  return (
    <td className={column.className}>
      {column.render ? column.render(value, row) : value}
    </td>
  );
}
export default TableCell;
