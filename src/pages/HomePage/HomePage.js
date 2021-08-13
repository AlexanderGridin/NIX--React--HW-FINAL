import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getTotalPopultaionData } from "../../lib/datausaIoApi";
import { setPopulationTotalData } from "../../store/populationSlice";

import Page from "../../components/Page/Page";
import ResponsiveBarChart from "../../components/ResponsiveBarChart/ResponsiveBarChart";

const HomePage = () => {
  const dispatch = useDispatch();

  const populationTotalData = useSelector(
    (state) => state.populationData.populationTotalData
  );

  const chartTitle =
    populationTotalData &&
    `Population from ${populationTotalData[0].Year} year till ${
      populationTotalData[populationTotalData.length - 1].Year
    } year`;

  useEffect(() => {
    if (!populationTotalData) {
      getTotalPopultaionData().then((populationData) => {
        console.log(populationTotalData);
        dispatch(
          setPopulationTotalData({
            populationTotalData: populationData.data.reverse(),
          })
        );
      });
    }
  }, []);

  return (
    <Page title="Population Info Gid - your gid into population info :)">
      {populationTotalData && (
        <ResponsiveBarChart
          title={chartTitle}
          data={populationTotalData}
          XAxisDataKey="Year"
          barDataKey="Population"
        />
      )}
    </Page>
  );
};

export default HomePage;
