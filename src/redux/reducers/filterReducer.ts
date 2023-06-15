import { ICostFilterData } from "../../components/Unit/Filters/CostFilter";
import costData from "../../consts/costData";
import { FilterActionTypes } from "../actionTypes/filterActionType";

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
      return {
        ...state,
        ageFilter: action.payload,
      };

    case FilterActionTypes.SET_COST_FILTER: {
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

    case FilterActionTypes.GET_FILTERS: {
      return {
        ...state,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default filterReducer;
