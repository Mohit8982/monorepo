// TableEmpty.jsx

function TableEmpty({ message = "No data found" }) {
  return (
    <tr>
      <td colSpan="100%" className="table-empty">
        {message}
      </td>
    </tr>
  );
}

export default TableEmpty;
