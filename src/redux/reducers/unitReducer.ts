import { createReducer } from '@reduxjs/toolkit';
import { getData } from '../actions/unitActions';

import unitData from '../../data/units/data.json';
import { Unit, GameData } from '../../data/units/types';

const initialState: GameData = {
  units: unitData.units as Unit[],
};

const unitReducer = createReducer(initialState, (builder) => {
  builder.addCase(getData, (state) => {
    return state;
  });
});

export default unitReducer;
