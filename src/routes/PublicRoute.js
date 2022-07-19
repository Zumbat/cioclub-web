import { Navigate, useLocation } from "react-router-dom";

import { ROUTES } from "./index";

export const PublicRoute = ({
  component: RouteComponent,
  restricted = false,
}) => {
  let location = useLocation();
  const token = localStorage.getItem("token");
  console.log("aaaa");
  if (token) {
    return <Navigate to={ROUTES.DASHBOARD} state={{ from: location }} />;
  } else {
    console.log("login");
    // return <Navigate to={ROUTES.SIGN_IN} state={{ from: location }} />;
  }
  console.log("aaaa");
  return <RouteComponent />;
};
