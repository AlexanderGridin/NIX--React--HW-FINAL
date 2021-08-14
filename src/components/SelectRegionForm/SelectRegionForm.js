import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  setSelectedRegion,
  setSelectedYear,
} from "../../store/populationSlice";

import Select from "../form/Select/Select";
import SubmitButton from "../form/SubmitButton/SubmitButton";

import styles from "./SelectRegionForm.module.css";

const SelectRegionForm = ({ onSubmit }) => {
  const dispatch = useDispatch();

  const regions = useSelector((state) => state.populationData.regions);
  const selectedRegionInGlobalState = useSelector(
    (state) => state.populationData.selectedRegion
  );

  const [selectedRegionInLocalState, setSelectedRegionInLocalState] =
    useState("");

  useEffect(() => {
    regions &&
      !selectedRegionInGlobalState &&
      setSelectedRegionInLocalState(regions[0].name);

    regions &&
      selectedRegionInGlobalState &&
      setSelectedRegionInLocalState(selectedRegionInGlobalState);
  }, [regions]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(setSelectedRegion({ selectedRegion: selectedRegionInLocalState }));
    dispatch(setSelectedYear({ selectedYear: "" }));

    onSubmit(selectedRegionInLocalState);
  };

  return (
    <form
      className={styles.SelectRegionForm}
      action="#"
      onSubmit={handleSubmit}
    >
      <div className={styles.SelectRegionFormItem}>
        {regions && (
          <Select
            value={selectedRegionInLocalState}
            label="Select state"
            id="select-state"
            options={regions}
            fieldForOptionValue="name"
            fieldForOptionText="name"
            onChange={setSelectedRegionInLocalState}
          />
        )}
      </div>

      <div className={styles.SelectRegionFormItem}>
        <SubmitButton>Get info</SubmitButton>
      </div>
    </form>
  );
};

export default SelectRegionForm;
