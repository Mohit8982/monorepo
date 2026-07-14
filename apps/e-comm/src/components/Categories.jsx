import {
  FaTshirt,
  FaMobileAlt,
  FaLaptop,
  FaHome,
  FaGamepad,
  FaMotorcycle,
} from "react-icons/fa";

import {
  MdOutlineFaceRetouchingNatural,
  MdOutlineKitchen,
} from "react-icons/md";

const categories = [
  { id: 1, name: "For You", icon: "🛍️" },
  { id: 2, name: "Fashion", icon: <FaTshirt /> },
  { id: 3, name: "Mobiles", icon: <FaMobileAlt /> },
  { id: 4, name: "Beauty", icon: <MdOutlineFaceRetouchingNatural /> },
  { id: 5, name: "Electronics", icon: <FaLaptop /> },
  { id: 6, name: "Home", icon: <FaHome /> },
  { id: 7, name: "Appliances", icon: <MdOutlineKitchen /> },
  { id: 8, name: "Toys", icon: <FaGamepad /> },
  { id: 9, name: "Food", icon: "🍔" },
  { id: 10, name: "Auto", icon: "🚗" },
  { id: 11, name: "2 Wheelers", icon: <FaMotorcycle /> },
];

const Categories = () => {
  return (
    <div
      className="
        flex items-center justify-around gap-5
        bg-white px-6 py-3
        border-b border-gray-200
        overflow-x-auto whitespace-nowrap
        scrollbar-hide
      "
    >
      {categories.map((item) => {
        const isActive = item.name === "For You";

        return (
          <div
            key={item.id}
            className={`
              relative flex min-w-[70px] cursor-pointer
              flex-col items-center gap-1.5
              transition-all duration-200
              hover:text-blue-500
              ${isActive ? "font-semibold text-black" : ""}
            `}
          >
            <div
              className={`
                flex h-12 w-12 items-center justify-center text-2xl
                ${isActive ? "rounded-xl bg-blue-50" : ""}
              `}
            >
              {item.icon}
            </div>

            <span className="text-sm font-medium whitespace-nowrap">
              {item.name}
            </span>

            {isActive && (
              <div className="absolute -bottom-[13px] h-[3px] w-full rounded-full bg-blue-500" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
