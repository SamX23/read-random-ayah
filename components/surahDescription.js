const SurahDescription = ({ styles, data, surah, ayah }) => (
  <div className={styles.surah_description}>
    <h3 className={styles.surahName}>
      Surah {data.englishName}({surah}) : {ayah.numberInSurah}
    </h3>
  </div>
);

export default SurahDescription;
