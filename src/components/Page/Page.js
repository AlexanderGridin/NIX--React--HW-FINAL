import Container from "../Container/Container";

import styles from "./Page.module.css";

const Page = ({ title, children }) => {
  return (
    <div className={styles.PageWrapper}>
      <Container>
        <h1 className={styles.PageTitle}>{title}</h1>
        <div className={styles.PageContent}>{children}</div>
      </Container>
    </div>
  );
};

export default Page;
