import styles from "./Notification.module.css";

const Notification = ({ text, children }) => {
  return <div className={styles.Notification}>{children}</div>;
};

export default Notification;
