import { Navigate, useLocation } from "react-router-dom";

import { ROUTES } from "./index";

export const PrivateRoute = ({ component: RouteComponent, token }) => {
  //   let location = useLocation();
  console.log(token);

  // useEffect(() => {
  //   console.log(token);
  // }, []);

  if (!token) {
    return <Navigate to={ROUTES.SIGN_IN} />;
  } else {
    console.log("ho il token");
    //return <Navigate to={ROUTES.DASHBOARD} />;
  }

  return <RouteComponent />;
};
