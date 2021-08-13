import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  populationTotalData: null,
  populationDataByStates: null,
};

const populationSlice = createSlice({
  name: "population",
  initialState,
  reducers: {
    setPopulationTotalData(state, action) {
      console.log(action.payload.populationTotalData);
      state.populationTotalData = action.payload.populationTotalData;
    },

    setPopulationDataByStates(state, action) {
      state.populationDataByStates = action.payload.populationDataByStates;
    },
  },
});

export const { setPopulationTotalData, setPopulationDataByStates } =
  populationSlice.actions;
export default populationSlice.reducer;
