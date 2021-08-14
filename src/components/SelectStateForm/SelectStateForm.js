import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setSelectedState } from "../../store/populationSlice";

import Select from "../../components/form/Select/Select";
import SubmitButton from "../form/SubmitButton/SubmitButton";
import styles from "./SelectStateForm.module.css";

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
    <form className={styles.SelectStateForm} action="#" onSubmit={handleSubmit}>
      <div className={styles.SelectStateFormItem}>
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
      </div>

      <div className={styles.SelectStateFormItem}>
        <SubmitButton>Get info</SubmitButton>
      </div>
    </form>
  );
};

export default SelectStateForm;
