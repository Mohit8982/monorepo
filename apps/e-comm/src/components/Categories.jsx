import {
  FaTshirt,
  FaMobileAlt,
  FaLaptop,
  FaHome,
  FaGamepad,
  FaShoppingBag,
} from "react-icons/fa";

import {
  MdOutlineFaceRetouchingNatural,
  MdOutlineKitchen,
} from "react-icons/md";

const categories = [
  {
    id: 1,
    name: "For You",
    icon: <FaShoppingBag className="text-yellow-500" />,
  },
  { id: 2, name: "Fashion", icon: <FaTshirt className="text-yellow-500" /> },
  { id: 3, name: "Mobiles", icon: <FaMobileAlt className="text-yellow-500" /> },
  {
    id: 4,
    name: "Beauty",
    icon: <MdOutlineFaceRetouchingNatural className="text-yellow-500" />,
  },
  {
    id: 5,
    name: "Electronics",
    icon: <FaLaptop className="text-yellow-500" />,
  },
  { id: 6, name: "Home", icon: <FaHome className="text-yellow-500" /> },
  {
    id: 7,
    name: "Appliances",
    icon: <MdOutlineKitchen className="text-yellow-500" />,
  },
  { id: 8, name: "Toys", icon: <FaGamepad className="text-yellow-500" /> },
];

const Categories = () => {
  return (
    <div
      className="
      h-30
      flex items-center
      gap-8
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
              text-[30px] mb-2
              ${isActive ? "rounded-xl bg-blue-50" : ""}
            `}
            >
              {item.icon}
            </div>

            {/* Label */}
            <span className="text-[20px]  font-medium leading-none whitespace-nowrap">
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
