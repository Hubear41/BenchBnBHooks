import { combineReducers } from 'redux';
import users from './users_reducer';
import benches from './benches_reducer';

const entitiesReducer = combineReducers({
    users,
    benches,
});

export default entitiesReducer;