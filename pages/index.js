import { useEffect, useState } from "react";
import { getAyah } from "../utils/data";
import { randomSurah, randomAyah } from "../utils/randomNum";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [text, setText] = useState({});
  const data = text.data;
  const valid = text.status === "OK";
  const maxAyah = valid && data.numberOfAyahs;
  const numberSurah = randomSurah(1, 114);
  const numberAyah = randomAyah(0, maxAyah);
  const source = getAyah(numberSurah);
  const surah = valid && data.number;
  const ayah = valid && data.ayahs[numberAyah];

  useEffect(() => {
    let mounted = true;
    fetch(source)
      .then((response) => response.json())
      .then((data) => mounted && setText(data))
      .catch((error) => console.log("Info : ", error));

    return function cleanup() {
      mounted = false;
    };
  }, []);

  return (
    <main className={styles.container}>
      <div className={styles.main}>
        <div className={styles.bismillah}>
          <h1 className={styles.ayah}>
            بِسْمِ ٱللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
          </h1>
        </div>
        <div className={styles.surah}>
          {text.status === "OK" ? (
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
        <div className={styles.surah_description}>
          <p>
            Surah {surah} : {ayah.numberInSurah}
          </p>
        </div>
      </div>
    </main>
  );
}
