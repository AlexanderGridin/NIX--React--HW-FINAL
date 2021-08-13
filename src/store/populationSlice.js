import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  populationTotalData: null,
  statesPopulationData: null,
  states: null,
  selectedState: "",
  years: null,
};

const populationSlice = createSlice({
  name: "population",
  initialState,
  reducers: {
    setPopulationTotalData(state, action) {
      state.populationTotalData = action.payload.populationTotalData;
    },

    setStatesPopulationData(state, action) {
      state.statesPopulationData = action.payload.statesPopulationData;
    },

    setStates(state, action) {
      state.states = action.payload.states;
    },

    setSelectedState(state, action) {
      state.selectedState = action.payload.selectedState;
    },

    setYears(state, action) {
      state.years = action.payload.years;
    },
  },
});

export const {
  setPopulationTotalData,
  setStatesPopulationData,
  setStates,
  setSelectedState,
  setYears,
} = populationSlice.actions;
export default populationSlice.reducer;
