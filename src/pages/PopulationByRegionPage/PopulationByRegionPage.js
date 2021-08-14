import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getRegionsPopulationData } from "../../lib/datausaIoApi";
import getRegionsAndYearsFromPopulationDataOfRegions from "../../lib/getRegionsAndYearsFromPopulationDataOfRegions";
import {
  setPopulationDataOfRegions,
  setRegions,
  setYears,
  setSelectedRegion,
} from "../../store/populationSlice";

import Page from "../../components/Page/Page";
import SelectRegionForm from "../../components/SelectRegionForm/SelectRegionForm";
import ResponsiveBarChart from "../../components/ResponsiveBarChart/ResponsiveBarChart";
import Notification from "../../components/Notification/Notification";

const PopulationByRegionPage = () => {
  const dispatch = useDispatch();

  const populationDataOfRegions = useSelector(
    (state) => state.populationData.populationDataOfRegions
  );

  const selectedRegion = useSelector(
    (state) => state.populationData.selectedRegion
  );

  const [populationDataOfSelectedRegion, setPopulationDataOfSelectedRegion] =
    useState(null);

  const [chartTitle, setChartTitle] = useState("");

  const handleSelectRegionFormSubmit = (selectedRegion) => {
    console.log(selectedRegion);
    dispatch(setSelectedRegion({ selectedRegion }));

    const populationDataOfSelectedRegion = populationDataOfRegions
      .filter(
        (regionDataFromState) => regionDataFromState.State === selectedRegion
      )
      .reverse();

    setPopulationDataOfSelectedRegion(populationDataOfSelectedRegion);

    setChartTitle(
      `Population of ${selectedRegion} from ${
        populationDataOfSelectedRegion[0].Year
      } year till ${
        populationDataOfSelectedRegion[
          populationDataOfSelectedRegion.length - 1
        ].Year
      } year`
    );
  };

  const reloadPopulationDataOfRegions = () => {
    getRegionsPopulationData().then((responseFromApi) => {
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

    if (selectedRegion) {
      const populationDataOfSelectedRegion = populationDataOfRegions
        .filter(
          (regionDataFromState) => regionDataFromState.State === selectedRegion
        )
        .reverse();

      setPopulationDataOfSelectedRegion(populationDataOfSelectedRegion);

      setChartTitle(
        `Population of ${selectedRegion} from ${
          populationDataOfSelectedRegion[0].Year
        } year till ${
          populationDataOfSelectedRegion[
            populationDataOfSelectedRegion.length - 1
          ].Year
        } year`
      );
    }
  }, []);

  return (
    <Page title="See population info by selected state">
      <SelectRegionForm onSubmit={handleSelectRegionFormSubmit} />

      {populationDataOfSelectedRegion && (
        <ResponsiveBarChart
          title={chartTitle}
          data={populationDataOfSelectedRegion}
          XAxisDataKey="Year"
          barDataKey="Population"
        />
      )}

      {!populationDataOfSelectedRegion && (
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

export default PopulationByRegionPage;
