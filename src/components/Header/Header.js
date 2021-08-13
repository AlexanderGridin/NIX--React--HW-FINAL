import Logo from "../Logo/Logo";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.HeaderRow}>
        <Logo />
      </div>
      <div className={styles.HeaderRow}></div>
    </header>
  );
};

export default Header;
