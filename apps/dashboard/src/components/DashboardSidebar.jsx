import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaBoxOpen,
  FaTags,
  FaShoppingCart,
  FaUsers,
  FaUserTie,
  FaTicketAlt,
  FaStar,
  FaChartBar,
  FaCog,
} from "react-icons/fa";

const sidebarConfig = {
  ADMIN: [
    {
      id: 1,
      label: "Dashboard",
      path: "/admin/dashboard",
      icon: FaTachometerAlt,
    },
    {
      id: 2,
      label: "Products",
      path: "/admin/products",
      icon: FaBoxOpen,
    },
    {
      id: 3,
      label: "Categories",
      path: "/admin/categories",
      icon: FaTags,
    },
    {
      id: 4,
      label: "Orders",
      path: "/admin/orders",
      icon: FaShoppingCart,
    },
    {
      id: 5,
      label: "Customers",
      path: "/admin/customers",
      icon: FaUsers,
    },
    {
      id: 6,
      label: "Employees",
      path: "/admin/employees",
      icon: FaUserTie,
    },
    {
      id: 7,
      label: "Coupons",
      path: "/admin/coupons",
      icon: FaTicketAlt,
    },
    {
      id: 8,
      label: "Reviews",
      path: "/admin/reviews",
      icon: FaStar,
    },
    {
      id: 9,
      label: "Reports",
      path: "/admin/reports",
      icon: FaChartBar,
    },
    {
      id: 10,
      label: "Settings",
      path: "/admin/settings",
      icon: FaCog,
    },
  ],

  EMPLOYEE: [
    {
      id: 1,
      label: "Dashboard",
      path: "/employee/dashboard",
      icon: FaTachometerAlt,
    },
    {
      id: 2,
      label: "Products",
      path: "/employee/products",
      icon: FaBoxOpen,
    },
    {
      id: 3,
      label: "Orders",
      path: "/employee/orders",
      icon: FaShoppingCart,
    },
    {
      id: 4,
      label: "Customers",
      path: "/employee/customers",
      icon: FaUsers,
    },
    {
      id: 5,
      label: "Reviews",
      path: "/employee/reviews",
      icon: FaStar,
    },
  ],
};

const DashboardSidebar = React.memo(() => {
  const { user } = useSelector((state) => state.login);
  const sidebarData = sidebarConfig[user.role.toUpperCase()];

  return (
    <>
      <aside className="sidebar">
        <div className="logo">
          <i className="fa-solid fa-shield"></i>
          <h2>AdminPro</h2>
        </div>

        <div className="menu-section">
          <p className="menu-title">MAIN</p>
          <ul>
            {sidebarData.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <NavLink key={item.id} to={item.path}>
                    <Icon className="menu-icon" />
                    <span>{item.label}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </>
  );
});

export default DashboardSidebar;
