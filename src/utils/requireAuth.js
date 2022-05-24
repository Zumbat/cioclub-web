import { useSelector } from 'react-redux';

// import { getAuth } from '../Containers/Auth/store/selectors';

export default ComposedComponent => props => {
	const isAuthenticated = true;

	return isAuthenticated ? <ComposedComponent {...props} /> : null;
};
