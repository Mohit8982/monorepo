import { lazy } from "react";
import Login from "../pages/Login";
import CustomerLayout from "../layouts/CustomerLayout";
import { Loadable } from "@mohit/ui";

const AboutUs = Loadable(lazy(() => import("../pages/AboutUs")));

export const publicRoutes = [
  {
    element: <CustomerLayout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
    ],
  },
];
