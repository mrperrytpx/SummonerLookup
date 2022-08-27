import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = ({ isAllowed, redirectPath = '/login', children }) => {

  const location = useLocation();
  const from = location.state?.from || redirectPath;

  if (!isAllowed) {
    return <Navigate state={{ from: location.pathname }} to={from} replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
