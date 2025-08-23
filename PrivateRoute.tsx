import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { getCurrentUser } from "../utils/auth";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const user = getCurrentUser();

  // If user exists, render children routes/components, else navigate to login
  return user ? <>{children}</> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
