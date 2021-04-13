const Surah = ({ styles, ayah }) => (
  <div className={styles.surah}>
    <h2 className={styles.ayah}>{ayah.text}</h2>
  </div>
);

export default Surah;
