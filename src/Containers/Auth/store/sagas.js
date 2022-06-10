// import jwtDecode from 'jwt-decode';
// import {
// 	call, put, takeLatest
// } from 'redux-saga/effects';

// import { Api } from '../../../entries/ApiTransport';
// import sagaAssessor from '../../../utils/sagaAssessor';
// import { actions } from './slice';

// const api = Api.getInstance();

// const signIn = ({ payload }) =>
// 	sagaAssessor(
// 		() =>
// 			function* () {
// 				const { callback, values } = payload;

// 				const { data } = yield call(() => api.post('auth/admin/login', values));

// 				localStorage.setItem('jwtToken', data?.token);
// 				const decode = jwtDecode(data?.token);
// 				decode.role_id = decode.role;

// 				yield put(actions.setUser({ user: decode, token: data.token }));

// 				callback && typeof callback === 'function' && callback(1);
// 			},
// 		err => actions.setError(err)
// 	);

// const logOut = ({ payload }) =>
// 	sagaAssessor(
// 		() =>
// 			function* () {
// 				const { callback } = payload || {};
// 				localStorage.removeItem('jwtToken');
// 				Object.keys(localStorage)
// 					.filter(
// 						item =>
// 							item.includes('searchText') ||
// 							item.includes('filterList') ||
// 							item.includes('sortingOptions')
// 					)
// 					.forEach(item => localStorage.removeItem(`${item}`));
// 				yield put(actions.logOutSuccess());
// 				callback && typeof callback === 'function' && callback();
// 			},
// 		err => actions.setError(err)
// 	);

// export default function* () {
// 	yield takeLatest(actions.signIn.type, signIn);
// 	yield takeLatest(actions.logOut.type, logOut);
// }
