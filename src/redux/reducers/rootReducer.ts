import { combineReducers } from "redux";

import unitReducer from "./unitReducer";
import filterReducer from "./filterReducer";

const rootReducer = combineReducers({
  unitReducer,
  filterReducer,
});

export default rootReducer;
