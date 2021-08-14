import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setSelectedState, setSelectedYear } from "../../store/populationSlice";

import Select from "../../components/form/Select/Select";
import { useState } from "react";

const SelectStateAndYearForm = ({ onSubmit }) => {
  const dispatch = useDispatch();

  const states = useSelector((state) => state.populationData.states);
  const years = useSelector((state) => state.populationData.years);

  const selectedStateFromStore = useSelector(
    (state) => state.populationData.selectedState
  );
  const selectedYearFromStore = useSelector(
    (state) => state.populationData.selectedYear
  );

  const [selectedFromFormState, setSelectedFromFormState] = useState("");
  const [selectedFromFormYear, setSelectedFromFormYear] = useState("");

  useEffect(() => {
    states &&
      !selectedStateFromStore &&
      setSelectedFromFormState(states[0].name);

    states &&
      selectedStateFromStore &&
      setSelectedFromFormState(selectedStateFromStore);

    years && !selectedYearFromStore && setSelectedFromFormYear(years[0].year);
    years &&
      selectedYearFromStore &&
      setSelectedFromFormYear(selectedYearFromStore);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(setSelectedState({ selectedFromFormState }));
    dispatch(setSelectedYear({ selectedFromFormYear }));

    onSubmit(selectedFromFormState, selectedFromFormYear);
  };

  return (
    <form action="#" onSubmit={handleSubmit}>
      {states && (
        <Select
          value={selectedFromFormState}
          label="Select state"
          id="select-state"
          options={states}
          fieldForOptionValue="name"
          fieldForOptionText="name"
          onChange={setSelectedFromFormState}
        />
      )}

      {years && (
        <Select
          value={selectedFromFormYear}
          label="Select year"
          id="select-year"
          options={years}
          fieldForOptionValue="year"
          fieldForOptionText="year"
          onChange={setSelectedFromFormYear}
        />
      )}

      <button type="submit">Get info</button>
    </form>
  );
};

export default SelectStateAndYearForm;
