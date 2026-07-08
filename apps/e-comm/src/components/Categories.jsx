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
    <div className="categoriesBar">
      {categories.map((item) => (
        <div
          key={item.id}
          className={`categoryItem ${
            item.name === "For You" ? "activeCategory" : ""
          }`}
        >
          <div className="categoryIcon">{item.icon}</div>
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Categories;
