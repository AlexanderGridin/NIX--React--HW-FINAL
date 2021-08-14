import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getPopulationDataOfRegionsFromDatausaIoApi } from "../../lib/datausaIoApi";
import getRegionsAndYearsFromPopulationDataOfRegions from "../../lib/getRegionsAndYearsFromPopulationDataOfRegions";
import {
  setPopulationDataOfRegions,
  setRegions,
  setYears,
  setSelectedRegion,
  setSelectedYear,
} from "../../store/populationSlice";

import Page from "../../components/Page/Page";
import SelectRegionAndYearForm from "../../components/SelectRegionAndYearForm/SelectRegionAndYearForm";
import ResponsiveBarChart from "../../components/ResponsiveBarChart/ResponsiveBarChart";
import Notification from "../../components/Notification/Notification";

const PopulationByRegionAndYearPage = () => {
  const dispatch = useDispatch();

  const populationDataOfRegions = useSelector(
    (state) => state.populationData.populationDataOfRegions
  );

  const selectedRegion = useSelector(
    (state) => state.populationData.selectedRegion
  );

  const selectedYear = useSelector(
    (state) => state.populationData.selectedYear
  );

  const [
    populationDataOfSelectedRegionInSelectedYear,
    setPopulationDataOfSelectedRegionInSelectedYear,
  ] = useState(null);

  const [chartTitle, setChartTitle] = useState("");

  const handleSelectRegionAndYearFormSubmit = (
    selectedRegion,
    selectedYear
  ) => {
    dispatch(setSelectedRegion({ selectedRegion }));
    dispatch(setSelectedYear({ selectedYear }));

    const populationDataOfSelectedRegionInSelectedYear =
      populationDataOfRegions.filter(
        (regionDataFromState) =>
          regionDataFromState.State === selectedRegion &&
          regionDataFromState.Year === selectedYear
      );

    setPopulationDataOfSelectedRegionInSelectedYear(
      populationDataOfSelectedRegionInSelectedYear
    );

    setChartTitle(`Population of ${selectedRegion} in ${selectedYear} year`);
  };

  const reloadPopulationDataOfRegions = () => {
    getPopulationDataOfRegionsFromDatausaIoApi().then((responseFromApi) => {
      const populationDataOfRegionsFromApi = responseFromApi.data;
      const regionsAndYears = getRegionsAndYearsFromPopulationDataOfRegions(
        populationDataOfRegionsFromApi
      );

      dispatch(
        setPopulationDataOfRegions({
          populationDataOfRegions: populationDataOfRegionsFromApi,
        })
      );

      dispatch(
        setRegions({
          regions: regionsAndYears.regions,
        })
      );

      dispatch(setYears({ years: regionsAndYears.years }));
    });
  };

  useEffect(() => {
    if (!populationDataOfRegions) {
      reloadPopulationDataOfRegions();
    }

    if (selectedRegion && selectedYear) {
      const populationDataOfSelectedRegionInSelectedYear =
        populationDataOfRegions.filter(
          (regionDataFromState) =>
            regionDataFromState.State === selectedRegion &&
            regionDataFromState.Year === selectedYear
        );

      setPopulationDataOfSelectedRegionInSelectedYear(
        populationDataOfSelectedRegionInSelectedYear
      );

      setChartTitle(`Population of ${selectedRegion} in ${selectedYear} year`);
    }
  }, []);

  return (
    <Page title="See population info by selected state">
      <SelectRegionAndYearForm onSubmit={handleSelectRegionAndYearFormSubmit} />

      {populationDataOfSelectedRegionInSelectedYear && (
        <ResponsiveBarChart
          title={chartTitle}
          data={populationDataOfSelectedRegionInSelectedYear}
          XAxisDataKey="Year"
          barDataKey="Population"
        />
      )}

      {selectedRegion && !selectedYear && (
        <Notification>
          <p>
            We remember, that your select state{" "}
            <strong>{selectedRegion}</strong> on page{" "}
            <strong>"See population info by selected state"</strong>. <br />
            Now you need to select <strong>year</strong> and press{" "}
            <strong>"Get info"</strong>
            button to see diagram. <br /> Or you can select another{" "}
            <strong>state</strong>, select <strong>year</strong> and press{" "}
            <strong>"Get info"</strong> button to see diagram.
          </p>
        </Notification>
      )}

      {!selectedRegion && !selectedYear && (
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

export default PopulationByRegionAndYearPage;
