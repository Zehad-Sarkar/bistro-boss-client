import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth/useAuth";
import useAdmin from "../../hooks/useAdmin/useAdmin";

const AdminRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  if (loading || isAdminLoading) {
    return <progress className="w-56 progress"></progress>;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
