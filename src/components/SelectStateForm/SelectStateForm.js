import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setSelectedState } from "../../store/populationSlice";

import Select from "../../components/form/Select/Select";

const SelectStateForm = ({ onSubmit }) => {
  const dispatch = useDispatch();

  const states = useSelector((state) => state.populationData.states);
  const selectedStateFromStore = useSelector(
    (state) => state.populationData.selectedState
  );
  const [selectedUSAState, setSelectedUSAState] = useState("");

  useEffect(() => {
    states && !selectedStateFromStore && setSelectedUSAState(states[0].name);

    states &&
      selectedStateFromStore &&
      setSelectedUSAState(selectedStateFromStore);
  }, [states]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(setSelectedState({ selectedUSAState }));

    onSubmit(selectedUSAState);
  };

  return (
    <form action="#" onSubmit={handleSubmit}>
      {states && (
        <Select
          value={selectedUSAState}
          label="Select state"
          id="select-state"
          options={states}
          fieldForOptionValue="name"
          fieldForOptionText="name"
          onChange={setSelectedUSAState}
        />
      )}

      <button type="submit">Get info</button>
    </form>
  );
};

export default SelectStateForm;
