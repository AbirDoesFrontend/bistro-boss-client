import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [ isAdmin , isAdminLoading ] = useAdmin()
  const location = useLocation();

  if (loading || isAdminLoading) {
    return (
      <div className="flex flex-col items-center mt-96">
        <button className="btn">
          <span className="loading loading-spinner text-white"></span>
          loading
        </button>
      </div>
    );
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to={"/"} state={{ from: location }} replace />;
};

export default AdminRoute;
