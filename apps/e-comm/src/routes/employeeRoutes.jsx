import { lazy } from "react";
import { Loadable } from "@mohit/ui";

const AdminDashboard = Loadable(lazy(() => import("../pages/admin/Dashboard")));
const AdminLayout = Loadable(lazy(() => import("../layouts/AdminLayout")));
const Products = Loadable(lazy(() => import("../pages/admin/Products")));
const Orders = Loadable(lazy(() => import("../pages/admin/Orders")));
const Customers = Loadable(lazy(() => import("../pages/admin/Customers")));
const Reviews = Loadable(lazy(() => import("../pages/admin/Reviews")));

export const employeeRoutes = [
  {
    element: <AdminLayout />,
    children: [
      {
        path: "/employee/dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "/employee/products",
        element: <Products />,
      },
      {
        path: "/employee/orders",
        element: <Orders />,
      },
      {
        path: "/employee/customers",
        element: <Customers />,
      },
      {
        path: "/employee/reviews",
        element: <Reviews />,
      },
    ],
  },
];
