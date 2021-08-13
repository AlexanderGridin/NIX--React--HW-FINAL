import getJSONDataFromApi from "./getJSONDataFromApi";

export const getTotalPopultaionData = async () =>
  await getJSONDataFromApi(
    "https://datausa.io/api/data?drilldowns=Year&measures=Population"
  );

export const getStatesPopulationData = async () =>
  await getJSONDataFromApi(
    "https://datausa.io/api/data?drilldowns=State&measures=Population"
  );
