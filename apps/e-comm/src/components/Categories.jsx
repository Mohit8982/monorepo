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
      sticky top-0 z-40
      flex items-center
      gap-8
      overflow-x-auto
      whitespace-nowrap
      bg-white
      px-6 py-2
      border-b border-gray-200
      scrollbar-hide
      justify-center
    "
    >
      {categories.map((item) => {
        const isActive = item.name === "For You";

        return (
          <div
            key={item.id}
            className={`
            relative
            flex min-w-fit cursor-pointer
            flex-col items-center
            gap-0
            transition-all duration-200
            hover:text-blue-500
            ${isActive ? "font-semibold text-slate-700" : "text-slate-700"}
          `}
          >
            {/* Icon */}
            <div
              className={`
              flex h-9 w-9 items-center justify-center
              text-[26px]
              ${isActive ? "rounded-xl bg-blue-50" : ""}
            `}
            >
              {item.icon}
            </div>

            {/* Label */}
            <span className="text-[15px]  font-medium leading-none whitespace-nowrap">
              {item.name}
            </span>

            {/* Active Indicator */}
            {isActive && (
              <div
                className="
                absolute
                -bottom-[9px]
                left-0
                h-[3px]
                w-full
                rounded-full
                bg-blue-500
              "
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
