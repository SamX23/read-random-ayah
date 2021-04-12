const Surah = ({ styles, valid, data, ayah }) => {
  return (
    <div className={styles.surah}>
      {valid ? (
        <>
          <h2 className={styles.surahName}>{data.englishName}</h2>
          <p className={styles.ayah}>{ayah.text}</p>
        </>
      ) : (
        <div>
          <h1>please wait.. :)</h1>
        </div>
      )}
    </div>
  );
};

export default Surah;
