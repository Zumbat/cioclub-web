import * as allSelectors from './selectors';
import { actions, reducer } from './slice';

export const selectors = allSelectors;
export const errorReducer = reducer;
export const errorActions = actions;
