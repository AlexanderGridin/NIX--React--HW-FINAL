import { configureStore } from "@reduxjs/toolkit";

import populationDataReudcer from "./populationSlice";

export default configureStore({
  reducer: {
    populationData: populationDataReudcer,
  },
});
