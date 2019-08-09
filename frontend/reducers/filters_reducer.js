import { UPDATE_BOUNDS } from '../actions/filter_actions';

const defaultState = {
    bounds: {},
    minSeating: 1,
    maxSeating: 10,
}

const filtersReducer = (state = defaultState, action) => {
    Object.freeze(state);
    switch(action.type) {
        case UPDATE_BOUNDS:
            return Object.assign({}, state, { [filter]: value });
        default:
            return state;
    }
}

export default filtersReducer;