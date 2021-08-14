import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  setSelectedRegion,
  setSelectedYear,
} from "../../store/populationSlice";

import Select from "../form/Select/Select";
import SubmitButton from "../form/SubmitButton/SubmitButton";

import styles from "./SelectRegionAndYearForm.module.css";

const SelectRegionAndYearForm = ({ onSubmit }) => {
  const dispatch = useDispatch();

  const regions = useSelector((state) => state.populationData.regions);
  const years = useSelector((state) => state.populationData.years);

  const selectedRegionInGlobalState = useSelector(
    (state) => state.populationData.selectedRegion
  );
  const selectedYearInGlobalState = useSelector(
    (state) => state.populationData.selectedYear
  );

  const [selectedRegionInLocalState, setSelectedRegionInLocalState] =
    useState("");
  const [selectedYearInLocalState, setSelectedYearInLocalState] = useState("");

  useEffect(() => {
    regions &&
      !selectedRegionInGlobalState &&
      setSelectedRegionInLocalState(regions[0].name);

    regions &&
      selectedRegionInGlobalState &&
      setSelectedRegionInLocalState(selectedRegionInGlobalState);

    years &&
      !selectedYearInGlobalState &&
      setSelectedYearInLocalState(years[0].year);

    years &&
      selectedYearInGlobalState &&
      setSelectedYearInLocalState(selectedYearInGlobalState);
  }, [regions, years]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(setSelectedRegion({ selectedRegionInLocalState }));
    dispatch(setSelectedYear({ selectedYearInLocalState }));

    onSubmit(selectedRegionInLocalState, selectedYearInLocalState);
  };

  return (
    <form
      className={styles.SelectRegionAndYearForm}
      action="#"
      onSubmit={handleSubmit}
    >
      <div className={styles.SelectRegionAndYearFormItem}>
        {regions && (
          <Select
            value={selectedRegionInLocalState}
            label="Select state"
            id="select-region"
            options={regions}
            fieldForOptionValue="name"
            fieldForOptionText="name"
            onChange={setSelectedRegionInLocalState}
          />
        )}
      </div>

      <div className={styles.SelectRegionAndYearFormItem}>
        {years && (
          <Select
            value={selectedYearInLocalState}
            label="Select year"
            id="select-year"
            options={years}
            fieldForOptionValue="year"
            fieldForOptionText="year"
            onChange={setSelectedYearInLocalState}
          />
        )}
      </div>

      <div className={styles.SelectRegionAndYearFormItem}>
        <SubmitButton>Get info</SubmitButton>
      </div>
    </form>
  );
};

export default SelectRegionAndYearForm;
