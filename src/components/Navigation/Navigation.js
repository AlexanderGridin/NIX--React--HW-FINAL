import styles from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import NAVIGATION from "../../constants/navigation";

export default function Navigation() {
  return <nav className={styles.nav}>{renderNavigationList(NAVIGATION)}</nav>;
}

function renderNavigationList(
  navigationItems,
  hasNestedNavigationList = false
) {
  return (
    <ul
      className={
        hasNestedNavigationList ? `${styles.navSubList}` : `${styles.navList}`
      }
    >
      {navigationItems.map((item, i) => renderNavigationListItem(item, i))}
    </ul>
  );
}

function renderNavigationListItem(navigationItemObj, index) {
  if (navigationItemObj.nested && navigationItemObj.nested.length > 0) {
    return (
      <li
        className={
          navigationItemObj.nested
            ? `${styles.navListItem} ${styles.hasSubList}`
            : `${styles.navListItem}`
        }
        key={index}
      >
        <NavLink
          className={styles.navLink}
          activeClassName={styles.active}
          to={navigationItemObj.url}
          exact
        >
          {navigationItemObj.title}
        </NavLink>
        {renderNavigationList(navigationItemObj.nested, true)}
      </li>
    );
  }

  return (
    <li className={styles.navListItem} key={index}>
      <NavLink
        className={styles.navLink}
        activeClassName={styles.active}
        to={navigationItemObj.url}
        exact
      >
        {navigationItemObj.title}
      </NavLink>
    </li>
  );
}
