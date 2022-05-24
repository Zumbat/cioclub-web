import { createSelector } from 'reselect';

const selectError = state => state.error;

export const getError = () => createSelector(selectError, state => state.error);
