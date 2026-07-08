import { Bell, Search } from "lucide-react";

const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between border-b bg-white px-8 py-5">
        <div className="flex items-center gap-3 rounded-lg border bg-gray-100 px-4 py-2">
          <Search size={18} />
          <input
            className="bg-transparent outline-none"
            placeholder="Search..."
          />
        </div>

        <div className="flex items-center gap-6">
          <Bell className="cursor-pointer" />
          <img
            className="h-10 w-10 rounded-full"
            src="https://i.pravatar.cc/150?img=3"
            alt=""
          />
        </div>
      </header>
    </>
  );
};

export default Header;
