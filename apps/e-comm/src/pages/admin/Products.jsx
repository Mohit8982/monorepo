import { Table } from "@mohit/ui";
import { Link } from "react-router-dom";

const columns = [
  {
    key: "name",
    title: "Product Name",
    sortable: true,
    width: "150px",
  },
  {
    key: "price",
    title: "Price",
    sortable: true,
    width: "150px",
  },
  {
    key: "status",
    title: "Status",
    width: "150px",
    render: (value) => <span>{value}</span>,
  },
];

const data = Array.from({ length: 120 }, (_, index) => ({
  id: index + 1,
  name:
    index % 5 === 0
      ? `iPhone ${15 + (index % 3)}`
      : index % 5 === 1
        ? `Samsung S${25 + (index % 5)}`
        : index % 5 === 2
          ? `Google Pixel ${8 + (index % 2)}`
          : index % 5 === 3
            ? `OnePlus ${12 + (index % 2)}`
            : `Nothing Phone ${2 + (index % 3)}`,
  price: `₹${(25000 + index * 1200).toLocaleString("en-IN")}`,
  status: index % 2 === 0 ? "Active" : "Inactive",
}));

const Products = () => {
  return (
    <>
      <div className="products-page">
        <div className="page-header">
          <div>
            <h1>Products</h1>
            <p>Manage all products from one place</p>
          </div>

          <Link className="add-product-btn" to="/admin/add-products">
            + Add Product
          </Link>
        </div>

        <div className="wrapper">
          <Table columns={columns} data={data} />
        </div>

        <footer className="page-footer">
          <span>Total Products: 120</span>
          <span>© 2026 Admin Dashboard</span>
        </footer>
      </div>
    </>
  );
};

export default Products;
