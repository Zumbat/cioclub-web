// import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

// import { selectors } from '../../Containers/Auth/store';
import { ROUTES } from '../constants';

export const PrivateRoute = ({
	component: RouteComponent,
	roles,
	isAuthenticated,
}) => {
	let location = useLocation();
	// const user = useSelector(selectors.getUser());
	// const userHasRequiredRole =
	// 	user && !!roles.filter(role => +role.id === +user.role_id).length;

	// if (!isAuthenticated) {
	// 	return <Navigate to={ROUTES.SIGN_IN} state={{ from: location }} />;
	// }

	// if (isAuthenticated && !userHasRequiredRole) {
	// 	return <div>Access denied</div>;
	// }

	return <RouteComponent />;
};
