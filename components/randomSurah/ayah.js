const Ayah = ({ styles, ayah }) => (
  <div className={styles.ayahContainer}>
    <h2 className={styles.ayah}>{ayah.text}</h2>
  </div>
);

export default Ayah;
