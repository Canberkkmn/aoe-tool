import { UnitActionTypes } from "../actionTypes/unitActionType";

export const getInitialUnitData = () => {
  return {
    type: UnitActionTypes.GET_INITIAL_UNIT_DATA,
  };
};
