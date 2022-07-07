import { Navigate, useLocation } from "react-router-dom";

import { ROUTES } from "./index";

export const PrivateRoute = ({ component: RouteComponent, token }) => {
  //   let location = useLocation();

  if (!token) {
    return <Navigate to={ROUTES.SIGN_IN} />;
  }

  return <RouteComponent />;
};
