const getRegionsAndYearsFromPopulationDataOfRegions = (
  populationDataOfRegions
) => {
  if (!populationDataOfRegions) {
    return;
  }

  let regions = new Set();
  let years = new Set();

  populationDataOfRegions.forEach((populationDataOfRegion) => {
    regions.add(populationDataOfRegion.State);
    years.add(populationDataOfRegion.Year);
  });

  regions = [...regions];
  regions = regions.map((region) => ({ name: region }));

  years = [...years];
  years = years.map((year) => ({ year }));

  return {
    regions,
    years,
  };
};

export default getRegionsAndYearsFromPopulationDataOfRegions;
