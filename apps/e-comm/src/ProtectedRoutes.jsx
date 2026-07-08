import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
  const { isLogin } = useSelector((state) => state.login);

  return isLogin ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
