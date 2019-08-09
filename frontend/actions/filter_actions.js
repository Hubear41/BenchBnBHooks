import { fetchBenches } from './bench_actions';

export const UPDATE_BOUNDS = 'UPDATE_BOUNDS';

export const receiveBounds = bounds => ({
    type: UPDATE_BOUNDS,
    bounds,
});

export const updateBounds = bounds => (dispatch, getState) => {
    dispatch(receiveBounds(bounds));
    return fetchBenches(getState().ui.filters)(dispatch);
};