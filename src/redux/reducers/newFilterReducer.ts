import {
  costData,
  ICostFilterData,
} from "../../components/Unit/Filters/CostFilter";
import { FilterActionTypes } from "../actionTypes/newFilterActions";

export interface IFilterState {
  ageFilter: string;
  costFilter: ICostFilterData[];
}

const initialState: IFilterState = {
  ageFilter: "All",
  costFilter: costData,
};

const filterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FilterActionTypes.SET_AGE_FILTER:
      console.log("SET_AGE_FILTER action called", action);

      return {
        ...state,
        ageFilter: action.payload,
      };

    case FilterActionTypes.GET_AGE_FILTER: {
      console.log("GET_AGE_FILTER action called", action);

      return {
        ...state,
      };
    }

    case FilterActionTypes.SET_COST_FILTER: {
      console.log("SET_COST_FILTER action called", action);

      const costFilter = state.costFilter.map((cost: any) => {
        if (cost.name === action.payload.name) {
          return {
            ...cost,
            active: action.payload.active,
            range: action.payload.range,
          };
        }
        return cost;
      });

      return {
        ...state,
        costFilter,
      };
    }
    default:
      console.log("no action called - filterReducer");
      return {
        ...state,
      };
  }
};

export default filterReducer;
