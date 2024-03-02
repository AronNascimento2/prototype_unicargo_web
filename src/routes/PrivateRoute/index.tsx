import { Navigate } from "react-router-dom";

export interface PrivateRouteProps {
  children: React.ReactNode;
  redirectTo: string; 
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, redirectTo }) => {
  const isAuthenticated = localStorage.getItem('token') !== null;

  if (!isAuthenticated) {
    return <Navigate to={redirectTo} />;
  }

  return <>{children}</>;
};
