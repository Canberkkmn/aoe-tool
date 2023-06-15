import { UnitActionTypes } from "../actionTypes/unitActionType";

const initialState = {
  initialUnitData: [],
  filteredUnitData: [],
};

const unitReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UnitActionTypes.SET_INITIAL_UNIT_DATA:
      return {
        ...state,
        initialUnitData: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default unitReducer;
