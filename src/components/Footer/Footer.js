import Copyrights from "../Copyrights/Copyrights";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.FooterRow}>
        <Copyrights />
      </div>
    </footer>
  );
};

export default Footer;
