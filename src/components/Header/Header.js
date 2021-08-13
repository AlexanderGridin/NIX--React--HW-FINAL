import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.HeaderRow}>
        <Logo />
      </div>
      <div className={styles.HeaderRow}>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
