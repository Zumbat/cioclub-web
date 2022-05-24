import { call, put } from 'redux-saga/effects';

import { errorActions } from '../shared/Error/store';
import { loaderActions } from '../shared/Loader/store';


export default function* (
	successAction,
	errorAction,
) {
	try {
		yield put(loaderActions.startLoader());
		yield call(successAction());
	} catch (error) {
		yield put(errorActions.setError(error?.response?.data?.error || error?.response?.data?.message || null));
		yield put(errorAction(error?.response?.data?.error || error?.response?.data?.message || null));
	} finally {
		yield put(loaderActions.stopLoader());
	}
}
