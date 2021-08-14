import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getStatesPopulationData } from "../../lib/datausaIoApi";
import getStatesAndYearsFromStatesPopulationData from "../../lib/getStatesAndYearsFromStatesPopulationData";
import {
  setSelectedState,
  setStatesPopulationData,
  setStates,
  setYears,
  setSelectedYear,
} from "../../store/populationSlice";

import Page from "../../components/Page/Page";
import SelectStateAndYearForm from "../../components/SelectStateAndYearForm/SelectStateAndYearForm";
import ResponsiveBarChart from "../../components/ResponsiveBarChart/ResponsiveBarChart";
import Notification from "../../components/Notification/Notification";

const PopulationByStateAndYearPage = () => {
  const dispatch = useDispatch();

  const statesPopulationData = useSelector(
    (state) => state.populationData.statesPopulationData
  );

  const selectedState = useSelector(
    (state) => state.populationData.selectedState
  );

  const selectedYear = useSelector(
    (state) => state.populationData.selectedYear
  );

  const [
    populationDataOfSelectedStateInSelectedYear,
    setPopulationDataOfSelectedStateInSelectedYear,
  ] = useState(null);

  const [chartTitle, setChartTitle] = useState("");

  const handleSelectStateAndYearFormSubmit = (selectedState, selectedYear) => {
    dispatch(setSelectedState({ selectedState }));
    dispatch(setSelectedYear({ selectedYear }));

    const populationDataOfSelectedStateInSelectedYear =
      statesPopulationData.filter(
        (stateFromStore) =>
          stateFromStore.State === selectedState &&
          stateFromStore.Year === selectedYear
      );

    setPopulationDataOfSelectedStateInSelectedYear(
      populationDataOfSelectedStateInSelectedYear
    );

    setChartTitle(`Population of ${selectedState} in ${selectedYear} year`);
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

    if (selectedState && selectedYear) {
      const populationDataOfSelectedStateInSelectedYear =
        statesPopulationData.filter(
          (stateFromStore) =>
            stateFromStore.State === selectedState &&
            stateFromStore.Year === selectedYear
        );

      setPopulationDataOfSelectedStateInSelectedYear(
        populationDataOfSelectedStateInSelectedYear
      );

      setChartTitle(`Population of ${selectedState} in ${selectedYear} year`);
    }
  }, []);

  return (
    <Page title="See population info by selected state">
      <SelectStateAndYearForm onSubmit={handleSelectStateAndYearFormSubmit} />

      {populationDataOfSelectedStateInSelectedYear && (
        <ResponsiveBarChart
          title={chartTitle}
          data={populationDataOfSelectedStateInSelectedYear}
          XAxisDataKey="Year"
          barDataKey="Population"
        />
      )}

      {selectedState && !selectedYear && (
        <Notification>
          <p>
            We remember, that your select state <strong>{selectedState}</strong>{" "}
            on page <strong>"See population info by selected state"</strong>.{" "}
            <br />
            Now you need to select <strong>year</strong> and press{" "}
            <strong>"Get info"</strong>
            button to see diagram. <br /> Or you can select another{" "}
            <strong>state</strong>, select <strong>year</strong> and press{" "}
            <strong>"Get info"</strong> button to see diagram.
          </p>
        </Notification>
      )}

      {!selectedState && !selectedYear && (
        <Notification>
          <p>
            Please, select <strong>state</strong>, <strong>year</strong> and
            press <strong>"Get info"</strong> button to see diagram...
          </p>
        </Notification>
      )}
    </Page>
  );
};

export default PopulationByStateAndYearPage;
