import React from 'react';
import { useDispatch } from 'react-redux';

import { login } from '../../../../features/user';

function Login() {
	const dispatch = useDispatch({});

	return <div onClick={() => dispatch(login())}>Login</div>;
}

export default Login;
