import { UnitActionTypes } from "../actionTypes/unitActionType";

const initialState = {
  initialUnitData: [],
  filteredUnitData: [],
};

const unitReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UnitActionTypes.SET_INITIAL_UNIT_DATA:
      console.log("SET_INITIAL_UNIT_DATA action called", action);

      return {
        ...state,
        initialUnitData: action.payload,
      };
    default:
      console.log("no action called - unitReducer");

      return {
        ...state,
      };
  }
};

export default unitReducer;
