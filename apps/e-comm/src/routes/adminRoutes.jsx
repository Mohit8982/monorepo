import { lazy } from "react";
import { Loadable } from "@mohit/ui";

const AdminLayout = Loadable(lazy(() => import("../layouts/AdminLayout")));
const AdminDashboard = Loadable(lazy(() => import("../pages/admin/Dashboard")));
const Products = Loadable(lazy(() => import("../pages/admin/Products")));
const Orders = Loadable(lazy(() => import("../pages/admin/Orders")));
const Customers = Loadable(lazy(() => import("../pages/admin/Customers")));
const Reviews = Loadable(lazy(() => import("../pages/admin/Reviews")));
const Categories = Loadable(lazy(() => import("../pages/admin/Categories")));
const Employees = Loadable(lazy(() => import("../pages/admin/Employees")));
const Coupons = Loadable(lazy(() => import("../pages/admin/Coupons")));
const Reports = Loadable(lazy(() => import("../pages/admin/Reports")));
const Settings = Loadable(lazy(() => import("../pages/admin/Settings")));
const AddProducts = Loadable(lazy(() => import("../pages/admin/AddProducts")));

export const adminRoutes = [
  {
    element: <AdminLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "/admin/products",
        element: <Products />,
      },
      {
        path: "/admin/categories",
        element: <Categories />,
      },
      {
        path: "/admin/orders",
        element: <Orders />,
      },
      {
        path: "/admin/customers",
        element: <Customers />,
      },
      {
        path: "/admin/employees",
        element: <Employees />,
      },
      {
        path: "/admin/coupons",
        element: <Coupons />,
      },
      {
        path: "/admin/reports",
        element: <Reports />,
      },
      {
        path: "/admin/settings",
        element: <Settings />,
      },
      {
        path: "/admin/reviews",
        element: <Reviews />,
      },
      {
        path: "/admin/add-products",
        element: <AddProducts />,
      },
    ],
  },
];
