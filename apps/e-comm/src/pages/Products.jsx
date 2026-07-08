import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
import { Card, Pagination    } from "@mohit/ui";
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
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <>
      <div className="productsPage">
        <FilterSidebar />
        <div className="productsContainer">
          {products.map((product) => (
            <Card key={product.id} cardData={product} />
          ))}
          <Pagination settings={pagination} />
        </div>
      </div>
    </>
  );
};

export default Products;
