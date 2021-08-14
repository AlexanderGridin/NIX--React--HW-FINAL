import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getStatesPopulationData } from "../../lib/datausaIoApi";
import getStatesAndYearsFromStatesPopulationData from "../../lib/getStatesAndYearsFromStatesPopulationData";
import {
  setSelectedState,
  setStatesPopulationData,
  setStates,
  setYears,
} from "../../store/populationSlice";

import Page from "../../components/Page/Page";
import SelectStateForm from "../../components/SelectStateForm/SelectStateForm";
import ResponsiveBarChart from "../../components/ResponsiveBarChart/ResponsiveBarChart";
import Notification from "../../components/Notification/Notification";

const PopulationByStatePage = () => {
  const dispatch = useDispatch();

  const statesPopulationData = useSelector(
    (state) => state.populationData.statesPopulationData
  );

  const selectedState = useSelector(
    (state) => state.populationData.selectedState
  );

  const [populationDataOfSelectedState, setPopulationDataOfSelectedState] =
    useState(null);

  const [chartTitle, setChartTitle] = useState("");

  const handleSelectStateFormSubmit = (state) => {
    dispatch(setSelectedState({ selectedState: state }));

    const populationDataOfSelectedState = statesPopulationData
      .filter((stateFromStore) => stateFromStore.State === state)
      .reverse();

    setPopulationDataOfSelectedState(populationDataOfSelectedState);
    console.log(populationDataOfSelectedState);

    setChartTitle(
      `Population of ${state} from ${
        populationDataOfSelectedState[0].Year
      } year till ${
        statesPopulationData[populationDataOfSelectedState.length - 1].Year
      } year`
    );
  };

  const reuploadStatesPopulationData = () => {
    getStatesPopulationData().then((responseFromApi) => {
      const statesPopulationDataFromApi = responseFromApi.data;
      const statesAndYears = getStatesAndYearsFromStatesPopulationData(
        statesPopulationDataFromApi
      );

      dispatch(
        setStatesPopulationData({
          statesPopulationData: statesPopulationDataFromApi,
        })
      );

      dispatch(
        setStates({
          states: statesAndYears.states,
        })
      );

      dispatch(setYears({ years: statesAndYears.years }));
    });
  };

  useEffect(() => {
    if (!statesPopulationData) {
      reuploadStatesPopulationData();
    }

    if (selectedState) {
      const populationDataOfSelectedState = statesPopulationData
        .filter((stateFromStore) => stateFromStore.State === selectedState)
        .reverse();

      setPopulationDataOfSelectedState(populationDataOfSelectedState);
      setChartTitle(
        `Population of ${selectedState} from ${
          populationDataOfSelectedState[0].Year
        } year till ${
          statesPopulationData[populationDataOfSelectedState.length - 1].Year
        } year`
      );
    }
  }, []);

  return (
    <Page title="See population info by selected state">
      <SelectStateForm onSubmit={handleSelectStateFormSubmit} />

      {populationDataOfSelectedState && (
        <ResponsiveBarChart
          title={chartTitle}
          data={populationDataOfSelectedState}
          XAxisDataKey="Year"
          barDataKey="Population"
        />
      )}

      {!populationDataOfSelectedState && (
        <Notification>
          <p>
            Please, select <strong>state</strong> and press{" "}
            <strong>"Get info"</strong> button to see diagram...
          </p>
        </Notification>
      )}
    </Page>
  );
};

export default PopulationByStatePage;
