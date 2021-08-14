import { Link } from "react-router-dom";

import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.Logo}>
      <Link className={styles.LogoLink} to="/" exact={true}>
        Population info gid
      </Link>
    </div>
  );
};

export default Logo;
