import { Unit } from "../../data/units/types";
import { UnitActionTypes } from "../actionTypes/unitActionType";

interface IUnitState {
  initialUnitData: Unit[];
  filteredUnitData: Unit[];
}

const initialState: IUnitState = {
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
