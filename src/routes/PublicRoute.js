import { Navigate, useLocation } from "react-router-dom";

import { ROUTES } from "../constants";

export const PublicRoute = ({
  component: RouteComponent,
  token,
  restricted = false,
}) => {
  let location = useLocation();

  if (token && restricted) {
    return <Navigate to={ROUTES.HOME} state={{ from: location }} />;
  }

  return <RouteComponent />;
};
