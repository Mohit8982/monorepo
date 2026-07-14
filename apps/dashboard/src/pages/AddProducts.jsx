import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFormDetails } from "../../../e-comm/src/redux/dynamicForm";
import { Loader, DynamicForm, Heading } from "@mohit/ui";

const AddProducts = () => {
  const { isLoading, formFiled, error } = useSelector(
    (state) => state.dynamicFrom,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFormDetails());
  }, [dispatch]);

  if (isLoading || Object.keys(formFiled).length === 0) {
    return <Loader />;
  }

  if (error) {
    return (
      <>
        <h1>{error}</h1>
      </>
    );
  }

  return (
    <>
      <div className="products-page">
        <div className="page-header">
          <div>
            <Heading title={formFiled.title} />
          </div>
        </div>

        <div className="wrapper">
          {formFiled && <DynamicForm formFiled={formFiled.fields} />}
        </div>

        <footer className="page-footer">
          <span>Total Products: 120</span>
          <span>© 2026 Admin Dashboard</span>
        </footer>
      </div>
    </>
  );
};

export default AddProducts;
