import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
import { Pagination, ProductCard } from "@mohit/ui";
import FilterSidebar from "../components/FilterSidebar";

const Products = () => {
  const dispatch = useDispatch();

  const { products, pagination, loading, error } = useSelector(
    (state) => state.products,
  );

  useEffect(() => {
    if (!products.length) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  if (loading) {
    return <h2 className="p-10">Loading...</h2>;
  }

  if (error) {
    return <h2 className="p-10">{error}</h2>;
  }

  return (
    <div className="max-w-[1600px] mx-auto flex gap-5 p-5">
      <FilterSidebar />

      <div className="flex-1 min-w-0">
        <div
          className="
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3
    xl:grid-cols-4
    2xl:grid-cols-5
    gap-6
  "
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-10">
          <Pagination settings={pagination} />
        </div>
      </div>
    </div>
  );
};

export default Products;
