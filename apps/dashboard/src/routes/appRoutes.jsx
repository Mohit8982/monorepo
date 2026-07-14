import { useRoutes } from "react-router-dom";
import { lazy } from "react";
import RouteValidator from "./routeValidator";
import { ROLES } from "../constants/roles";
import { adminRoutes } from "./adminRoutes";
import { Loadable } from "@mohit/ui";

const NotFound = Loadable(lazy(() => import("../pages/NotFound")));

export default function AppRoutes() {
  return useRoutes([
    // Admin-only routes
    {
      element: <RouteValidator allowedRoles={[ROLES.ADMIN]} />,
      children: adminRoutes,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
}
