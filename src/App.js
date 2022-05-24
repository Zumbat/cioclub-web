/* eslint-disable multiline-ternary */
import './styles/index.scss';

import { MuiThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	Navigate, Outlet, Route, Routes
} from 'react-router-dom';

import { SignIn } from './Containers/Auth/containers';
import { selectors } from './Containers/Auth/store';
import PageWrapper from './Containers/Common/PageWrapper';
import Spinner from './Containers/Common/Spinner';
import Dashboard from './Containers/Dashboard';
import { ROLES, ROUTES } from './routes/constants';
import { PrivateRoute, PublicRoute } from './routes/containers';
import Error from './shared/Error/Error';
import Loader from './shared/Loader/Loader';
import muiTheme from './themes/muiTheme';
import useAuth from './utils/useAuth';

export default props => {
	const { isLoading } = useAuth();
	// const dispatch = useDispatch();
	const isAuthenticated = useSelector(selectors.getAuth());
	const userRoleId = +ROLES.COMPANY.id;

	return (
		<>
			{!isLoading ? (
				<MuiThemeProvider theme={muiTheme}>
					<Loader />
					<Error />
					<main className="container">
						<Routes>
							<Route
								path={ROUTES.SIGN_IN}
								element={
									<PublicRoute
										component={SignIn}
										isAuthenticated={isAuthenticated}
										restricted={true}
									/>
								}
							/>
							<Route
								path={ROUTES.LOGOUT}
								element={
									<PublicRoute
										component={SignIn}
										isAuthenticated={isAuthenticated}
										restricted={true}
									/>
								}
							/>
							<Route
								element={
									<PageWrapper>
										<Outlet />
									</PageWrapper>
								}
							>
								{/*<Route
										path={ROUTES.STATIONS}
										element={<Outlet />}
									>
										<Route index element={<PrivateRoute
											roles={[ROLES.COMPANY]}
											component={Stations}
											isAuthenticated={isAuthenticated}
										/>} />
										<Route path=':id' element={<PrivateRoute
											roles={[ROLES.COMPANY]}
											component={StationDetails}
											isAuthenticated={isAuthenticated}
										/>} />
									</Route>*/}

								<Route path={ROUTES.DASHBOARD} element={<Outlet />}>
									<Route
										index
										element={
											<PrivateRoute
												roles={[ROLES.USER]}
												component={Dashboard}
												isAuthenticated={isAuthenticated}
											/>
										}
									/>
								</Route>

								<Route
									path="*"
									element={
										isAuthenticated ? (
											<Navigate
												to={
													+userRoleId === +ROLES.ADMIN.id ?
														ROUTES.RICHIESTE :
														ROUTES.RICHIESTE
												}
											/>
										) : (
											<Navigate to={ROUTES.SIGN_IN} />
										)
									}
								/>
							</Route>
						</Routes>
					</main>
				</MuiThemeProvider>
			) : (
				<Spinner />
			)}
		</>
	);
};
