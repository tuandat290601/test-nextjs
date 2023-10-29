import styles from "./Layout.module.scss";

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <div className={styles.children}>{children}</div>
    </div>
  );
}

export default Layout;
