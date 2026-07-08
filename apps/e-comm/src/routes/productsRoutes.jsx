import { Suspense, lazy } from "react";
import { Loader, Loadable } from "@mohit/ui";

const Products = Loadable(lazy(() => import("../pages/Products")));
const ProductsDescription = Loadable(
  lazy(() => import("../pages/ProductsDescription")),
);

export const productRoutes = [
  {
    path: "/products",
    element: (
      <Suspense fallback={<Loader />}>
        <Products />
      </Suspense>
    ),
  },
  {
    path: "/products/:id",
    element: <ProductsDescription />,
  },
];
