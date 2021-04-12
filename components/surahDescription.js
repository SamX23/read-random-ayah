const SurahDescription = ({ styles, valid, surah, ayah }) => {
  return (
    <div className={styles.surah_description}>
      {valid && (
        <p>
          Surah {surah} : {ayah.numberInSurah}
        </p>
      )}
    </div>
  );
};

export default SurahDescription;
