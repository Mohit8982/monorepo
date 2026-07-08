import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

const Layout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Header />
        <main className="flex-1 p-8">
          <Outlet />
          <h1 className="mb-8 text-3xl font-bold">Dashboard Overview</h1>
        </main>
      </div>
    </div>
  );
};

export default Layout;
