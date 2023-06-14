import { UnitActionTypes } from "../actionTypes/unitActionType";

export const getInitialUnitData = () => {
  console.log("getInitialUnitData action called");

  return {
    type: UnitActionTypes.GET_INITIAL_UNIT_DATA,
  };
};
