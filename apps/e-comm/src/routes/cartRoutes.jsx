import { lazy } from "react";
import { Loadable } from "@mohit/ui";

const CartListing = Loadable(lazy(() => import("../pages/CartListing")));

export const cartRoutes = [
  {
    path: "/cart",
    element: <CartListing />,
  },
];
