import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { authReducer } from '../Containers/Auth/store';
import { errorReducer } from '../shared/Error/store';
import { loaderReducer } from '../shared/Loader/store';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
	reducer: {
		auth: authReducer,
		loader: loaderReducer,
		error: errorReducer,
	},
	middleware: getDefaultMiddleware => [
		...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
		sagaMiddleware,
	],
	devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(rootSaga);

export default store;
