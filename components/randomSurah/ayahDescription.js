import { useGlobalState } from "../../utils/context";

const AyahDescription = ({ styles, data, ayah, numberOfAyahs }) => {
  const [{ currentAyah }, dispatch] = useGlobalState();

  const handleNext = () => {
    if (currentAyah !== numberOfAyahs - 1) {
      dispatch({
        type: "NEXT_AYAH",
        currentAyah: currentAyah + 1,
      });
    }
  };

  const handlePrevious = () => {
    if (currentAyah !== 0) {
      dispatch({
        type: "PREVIOUS_AYAH",
        currentAyah: currentAyah - 1,
      });
    }
  };

  return (
    <div className={styles.ayah_panel}>
      <button
        className={styles.previous_button}
        type="button"
        onClick={() => handlePrevious()}
      >
        {"↼"}
      </button>

      <div className={styles.ayah_description}>
        <h3>
          Surah {data.englishName}[{data.number}] : {ayah.numberInSurah}
        </h3>
      </div>

      <button
        className={styles.next_button}
        type="button"
        onClick={() => handleNext()}
      >
        {"⇁"}
      </button>
    </div>
  );
};

export default AyahDescription;
