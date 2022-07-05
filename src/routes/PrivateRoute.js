import { Navigate, useLocation } from "react-router-dom";

import { ROUTES } from "./index";

export const PrivateRoute = ({
  component: RouteComponent,
  isAuthenticated,
}) => {
  //   let location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.SIGN_IN} />;
  }

  return <RouteComponent />;
};
