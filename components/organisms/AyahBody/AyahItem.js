import { useState } from "react";

const Ayah = ({ styles, ayah, text }) => {
  const [showAyah, showText] = useState(true);

  return (
    <div className={styles.ayahContainer}>
      {showAyah ? (
        <h2 className="ayah">{ayah?.text}</h2>
      ) : (
        <h2 className={styles.translate}>{text?.translation?.id}</h2>
      )}
      <div className={styles.swapButton}>
        <button type="button" onClick={() => showText(!showAyah)}>
          Translate
        </button>
      </div>
    </div>
  );
};

export default Ayah;
