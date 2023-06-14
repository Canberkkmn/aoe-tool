import { ICostFilterData } from "../../components/Unit/Filters/CostFilter";
import { FilterActionTypes } from "../actionTypes/newFilterActions";

export const setAgeFilterAction = (filter: string) => {
  console.log("setAgeFilterAction action called", filter);
  return {
    type: FilterActionTypes.SET_AGE_FILTER,
    payload: filter,
  };
};

export const setCostFilterAction = (cost: ICostFilterData) => {
  console.log("setCostFilterAction action called", cost);
  return {
    type: FilterActionTypes.SET_COST_FILTER,
    payload: cost,
  };
};
