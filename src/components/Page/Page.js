import Container from "../Container/Container";

import styles from "./Page.module.css";

const Page = ({ title, children }) => {
  return (
    <div className={styles.PageWrapper}>
      <Container>
        {title && <h1 className={styles.PageTitle}>{title}</h1>}
        {children && <div className={styles.PageContent}>{children}</div>}
      </Container>
    </div>
  );
};

export default Page;
