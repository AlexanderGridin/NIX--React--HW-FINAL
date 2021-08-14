import styles from "./Notification.module.css";

const Notification = ({ children }) => {
  return <div className={styles.Notification}>{children}</div>;
};

export default Notification;
