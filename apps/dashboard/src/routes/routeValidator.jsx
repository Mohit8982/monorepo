import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const RouteValidator = ({ allowedRoles = [] }) => {
  const { isLogin, user } = useSelector((state) => state.login);

  if (!isLogin) {
    return <Navigate to="/" replace />;
  }

  if (allowedRoles?.length && !allowedRoles.includes(user?.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};

export default RouteValidator;
