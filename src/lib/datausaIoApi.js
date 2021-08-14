import getJSONDataFromApi from "./getJSONDataFromApi";

export const getTotalPopultaionDataFromDatausaIoApi = async () =>
  await getJSONDataFromApi(
    "https://datausa.io/api/data?drilldowns=Year&measures=Population"
  );

export const getPopulationDataOfRegionsFromDatausaIoApi = async () =>
  await getJSONDataFromApi(
    "https://datausa.io/api/data?drilldowns=State&measures=Population"
  );
