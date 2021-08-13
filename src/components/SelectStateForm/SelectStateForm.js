import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setSelectedState } from "../../store/populationSlice";

import Select from "../../components/form/Select/Select";

const SelectStateForm = ({ onSubmit }) => {
  const dispatch = useDispatch();

  const states = useSelector((state) => state.populationData.states);
  const selectedState = useSelector(
    (state) => state.populationData.selectedState
  );

  useEffect(() => {
    states &&
      !selectedState &&
      dispatch(setSelectedState({ selectedState: states[0].name }));
  }, [states]);

  const handleSelectChange = (state) => {
    dispatch(setSelectedState({ selectedState: state }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(selectedState);
  };

  return (
    <form action="#" onSubmit={handleSubmit}>
      {states && (
        <Select
          value={selectedState}
          label="Select state"
          id="select-state"
          options={states}
          fieldForOptionValue="name"
          fieldForOptionText="name"
          onChange={handleSelectChange}
        />
      )}

      <button type="submit">Get info</button>
    </form>
  );
};

export default SelectStateForm;
