import { fetchBenches } from './bench_actions';

export const UPDATE_FILTER = 'UPDATE_FILTER';

export const receiveFilter = (filter, value) => ({
    type: UPDATE_FILTER,
    filter,
    value,
});

export const updateFilter = (filter, value) => (dispatch, getState) => {
    dispatch(receiveFilter(filter, value));
    return fetchBenches(getState().ui.filters)(dispatch);
};