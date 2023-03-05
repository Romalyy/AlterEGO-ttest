import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from '../../hooks/use-auth';

const PublikRoute = () => {
  const { isAuth } = useAuth();

  if (isAuth) {
    return <Navigate to="/profile" />;
  }
  return <Outlet />;
};

export default PublikRoute;
