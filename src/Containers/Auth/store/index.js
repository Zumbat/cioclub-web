import * as allSelectors from './selectors';
import { actions, reducer } from './slice';

export const selectors = allSelectors;
export const authReducer = reducer;
export const authActions = actions;
export { default as authSaga } from './sagas';
