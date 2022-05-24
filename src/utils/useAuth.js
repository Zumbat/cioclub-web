
import jwtDecode from 'jwt-decode';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { authActions } from '../Containers/Auth/store';

function useAuth() {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const token = localStorage.getItem('jwtToken');
		if (token) {
			const decode = jwtDecode(token);
			const date = new Date().getTime();
			decode.role_id = decode.role;
			//for now i have remove the time controll
			if (decode.exp < date && 1 != 1 ) {
				localStorage.removeItem('jwtToken');
				dispatch(authActions.logOutSuccess());
				setIsLoading(false);
			} else {
				localStorage.setItem('jwtToken', token);
				dispatch(authActions.setUser({ user: decode, token }));
				setIsLoading(false);
			}
		} else {
			setIsLoading(false);
			dispatch(authActions.logOutSuccess());
		}
	}, [dispatch]);

	return { isLoading };
}

export default useAuth;
