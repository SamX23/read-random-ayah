import { useEffect, useState } from "react";
import Nav from "../components/nav";
import styles from "../styles/Home.module.css";
import Surah from "../components/surah";
import SurahDescription from "../components/surahDescription";
import { useGlobalState } from "../utils/context";
import { randomAyah } from "../utils/randomNum";

export default function Home() {
  const result = useGlobalState();
  const [numberAyah, setNumberAyah] = useState(0);
  const { data, status } = result;
  const valid = status === "OK";

  const { numberOfAyahs, number, ayahs } = valid && data;
  const maxAyah = valid && numberOfAyahs;
  const surah = valid && number;
  const ayah = valid && ayahs[numberAyah];

  useEffect(() => {
    setNumberAyah(randomAyah(0, maxAyah));
  }, [result]);

  const handleNext = () => {
    if (numberAyah !== numberOfAyahs - 1) {
      setNumberAyah((noAyah) => noAyah + 1);
    }
  };

  const handlePrevious = () => {
    if (numberAyah !== 0) {
      setNumberAyah((noAyah) => noAyah - 1);
    }
  };

  return (
    <>
      <Nav />
      <main className={styles.container}>
        <div className={styles.main}>
          <div className={styles.bismillah}>
            <h1 className={styles.ayah}>
              بِسْمِ ٱللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
            </h1>
          </div>
          {valid ? (
            <>
              <Surah styles={styles} ayah={ayah} />
              <SurahDescription
                styles={styles}
                data={data}
                surah={surah}
                ayah={ayah}
              />
              <button type="button" onClick={() => handlePrevious()}>
                Previous
              </button>
              <button type="button" onClick={() => handleNext()}>
                Next
              </button>
            </>
          ) : (
            <div>
              <h1>please wait.. :)</h1>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
