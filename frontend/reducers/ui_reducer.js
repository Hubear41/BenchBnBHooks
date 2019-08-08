import { combineReducers } from "redux";
import filters from "./filters_reducer";

const uiReducer = combineReducers({
    filters,
});

export default uiReducer;