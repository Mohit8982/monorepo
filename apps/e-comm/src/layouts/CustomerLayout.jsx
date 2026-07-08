import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Categories from "../components/Categories";

function CustomerLayout() {
  return (
    <>
      <Header />
      <Categories />
      <Outlet />
      <Footer />
    </>
  );
}

export default CustomerLayout;
