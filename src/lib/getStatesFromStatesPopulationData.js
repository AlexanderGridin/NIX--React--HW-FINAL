const getStatesFromStatesPopulationData = (statesPopulationData) => {
  if (!statesPopulationData) {
    return;
  }

  let states = new Set();

  statesPopulationData.forEach((dataItem) => states.add(dataItem.State));
  states = [...states];
  states = states.map((state) => ({ name: state }));

  return states;
};

export default getStatesFromStatesPopulationData;
