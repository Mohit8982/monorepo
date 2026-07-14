import { useRoutes } from "react-router-dom";
import { lazy } from "react";
import RouteValidator from "./routeValidator";
import { ROLES } from "../constants/roles";
import { publicRoutes } from "./publicRoutes";
import { productRoutes } from "./productsRoutes";
import { cartRoutes } from "./cartRoutes";
import CustomerLayout from "../layouts/CustomerLayout";
import { Loadable } from "@mohit/ui";

const NotFound = Loadable(lazy(() => import("../pages/NotFound")));

export default function AppRoutes() {
  return useRoutes([
    ...publicRoutes,
    {
      element: (
        <RouteValidator
          allowedRoles={[ROLES.ADMIN, ROLES.CUSTOMER, ROLES.EMPLOYEE]}
        />
      ),
      children: [
        {
          element: <CustomerLayout />,
          children: [...productRoutes, ...cartRoutes],
        },
      ],
    },

    {
      path: "*",
      element: <NotFound />,
    },
  ]);
}
