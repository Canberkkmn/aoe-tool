import { combineReducers } from "redux";

import unitReducer from "./newUnitReducer";
import filterReducer from "./newFilterReducer";

const rootReducer = combineReducers({
  unitReducer,
  filterReducer,
});

export default rootReducer;
