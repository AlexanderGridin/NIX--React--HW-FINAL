import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  populationTotalData: null,
  populationDataOfRegions: null,

  regions: null,
  years: null,

  selectedRegion: "",
  selectedYear: "",
};

const populationSlice = createSlice({
  name: "population",
  initialState,
  reducers: {
    setPopulationTotalData(state, action) {
      state.populationTotalData = action.payload.populationTotalData;
    },

    setPopulationDataOfRegions(state, action) {
      state.populationDataOfRegions = action.payload.populationDataOfRegions;
    },

    setRegions(state, action) {
      state.regions = action.payload.regions;
    },

    setYears(state, action) {
      state.years = action.payload.years;
    },

    setSelectedRegion(state, action) {
      state.selectedRegion = action.payload.selectedRegion;
    },

    setSelectedYear(state, action) {
      state.selectedYear = action.payload.selectedYear;
    },
  },
});

export const {
  setPopulationTotalData,
  setPopulationDataOfRegions,

  setRegions,
  setYears,

  setSelectedRegion,
  setSelectedYear,
} = populationSlice.actions;
export default populationSlice.reducer;
