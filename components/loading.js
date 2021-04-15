import styles from "../styles/Layout.module.css";

const Loading = () => (
  <div className={styles.loading}>
    <div className={styles.bouncingLoader}>
      <div />
    </div>
  </div>
);

export default Loading;
