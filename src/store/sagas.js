import { all } from 'redux-saga/effects';

import { authSaga } from '../Containers/Auth/store/';

export default function* rootSaga() {
	yield all([authSaga()]);
}
