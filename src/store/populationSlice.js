import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  populationTotalData: null,
  statesPopulationData: null,
  states: null,
  years: null,
  selectedState: "",
  selectedYear: "",
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

    setYears(state, action) {
      state.years = action.payload.years;
    },

    setSelectedState(state, action) {
      state.selectedState = action.payload.selectedState;
    },

    setSelectedYear(state, action) {
      state.selectedYear = action.payload.selectedYear;
    },
  },
});

export const {
  setPopulationTotalData,
  setStatesPopulationData,
  setStates,
  setYears,
  setSelectedState,
  setSelectedYear,
} = populationSlice.actions;
export default populationSlice.reducer;
