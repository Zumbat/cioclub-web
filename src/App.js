import React, { useEffect } from "react";
import Dashboard from "./Containers/Dashboard/Dashboard";
import Login from "./Containers/Login/Login";
import Registration from "./Containers/Registration/Registration";

import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";

import { getAuth } from "./features/userSlice";

import { ROUTES } from "./routes";
import { PrivateRoute } from "./routes/PrivateRoute";
// import useAuth from "./utils/useAuth";

const App = (props) => {
  // const { isLoading } = useAuth();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    console.log("is", token);
  }, []);

  return (
    <main className="container">
      <Routes>
        <Route path={ROUTES.SIGN_IN} element={<Login />} />
        <Route path={ROUTES.REGISTRATION} element={<Registration />} />
        {/* <Route
						path={ROUTES.FORGOT_PASSWORD}
						element={<ForgotPassword />}
					/>
					<Route
						path={`${ROUTES.RESET_PASSWORD}/:token`}
						element={<ResetPassword />}
					/> */}

        {/* <Route
          path={ROUTES.DASHBOARD}
          element={<Dashboard token={token} />}
        /> */}
        {/* <Route
							path={ROUTES.TOURNAMENTS}
							element={<Tournaments />}
						/>
						<Route
							path={ROUTES.PLAYERS}
							element={<Players />}
						/>
						<Route
							path={ROUTES.SERVICES}
							element={<ServicesPage />}
						/>*/}
        <Route
          path={ROUTES.DASHBOARD}
          element={
            <PrivateRoute component={() => <Dashboard />} token={token} />
          }
        />
        <Route path="*" element={<Navigate to={ROUTES.DASHBOARD} />} />
      </Routes>
    </main>
  );
};

export default App;
