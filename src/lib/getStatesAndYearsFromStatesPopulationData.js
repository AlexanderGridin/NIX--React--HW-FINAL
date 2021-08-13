const getStatesAndYearsFromStatesPopulationData = (statesPopulationData) => {
  if (!statesPopulationData) {
    return;
  }

  let states = new Set();
  let years = new Set();

  statesPopulationData.forEach((dataItem) => {
    states.add(dataItem.State);
    years.add(dataItem.Year);
  });

  states = [...states];
  states = states.map((state) => ({ name: state }));

  years = [...years];
  years = years.map((year) => ({ year }));

  return {
    states,
    years,
  };
};

export default getStatesAndYearsFromStatesPopulationData;
