import styles from "./SubmitButton.module.css";

const SubmitButton = ({ children }) => (
  <button className={styles.SubmitButton} type="submit">
    {children}
  </button>
);

export default SubmitButton;
