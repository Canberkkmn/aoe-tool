import { ICostFilterData } from "../../components/Unit/Filters/CostFilter";
import { FilterActionTypes } from "../actionTypes/filterActionType";

export const setAgeFilterAction = (filter: string) => {
  return {
    type: FilterActionTypes.SET_AGE_FILTER,
    payload: filter,
  };
};

export const setCostFilterAction = (cost: ICostFilterData) => {
  return {
    type: FilterActionTypes.SET_COST_FILTER,
    payload: cost,
  };
};
