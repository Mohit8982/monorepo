import { LayoutDashboard, Users, ShoppingCart, Settings } from "lucide-react";

const Sidebar = () => {
  return (
    <>
      <aside className="hidden w-64 bg-gray-900 text-white md:flex md:flex-col">
        <div className="border-b border-gray-800 p-6 text-2xl font-bold">
          Dashboard
        </div>

        <nav className="mt-6 flex-1">
          <ul className="space-y-2 px-4">
            <li className="flex cursor-pointer items-center gap-3 rounded-lg bg-blue-600 px-4 py-3">
              <LayoutDashboard size={20} />
              Dashboard
            </li>

            <li className="flex cursor-pointer items-center gap-3 rounded-lg px-4 py-3 hover:bg-gray-800">
              <Users size={20} />
              Customers
            </li>

            <li className="flex cursor-pointer items-center gap-3 rounded-lg px-4 py-3 hover:bg-gray-800">
              <ShoppingCart size={20} />
              Orders
            </li>

            <li className="flex cursor-pointer items-center gap-3 rounded-lg px-4 py-3 hover:bg-gray-800">
              <Settings size={20} />
              Settings
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
