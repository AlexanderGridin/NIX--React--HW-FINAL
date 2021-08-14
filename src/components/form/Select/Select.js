import styles from "./Select.module.css";

const Select = ({
  label = null,
  id,
  value,
  options,
  fieldForOptionValue,
  fieldForOptionText,
  onChange,
}) => {
  return (
    <div className={styles.SelectWrapper}>
      {label && (
        <label className={styles.SelectLabel} htmlFor={id}>
          {label}
        </label>
      )}

      <select
        className={styles.Select}
        id={id}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      >
        {options.map((option, i) => {
          return (
            <option key={i} value={option[fieldForOptionValue]}>
              {option[fieldForOptionText]}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
