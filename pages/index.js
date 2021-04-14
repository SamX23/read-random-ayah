import { useEffect } from "react";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";
import Surah from "../components/surah";
import SurahDescription from "../components/surahDescription";
import { useGlobalState } from "../utils/context";
import { randomAyah } from "../utils/randomNum";
import { randomFetch } from "../utils/fetch";

export default function Home() {
  const [{ dataSource, currentAyah }, dispatch] = useGlobalState();
  const { data, status } = dataSource;
  const valid = status === "OK";
  const { numberOfAyahs, number, ayahs } = valid && data;
  const maxAyah = valid && numberOfAyahs;
  const surah = valid && number;
  const ayah = valid && ayahs[currentAyah];

  useEffect(() => {
    let mounted = true;
    randomFetch().then(
      (result) =>
        mounted &&
        dispatch({
          type: "SET_RANDOM_DATA",
          dataSource: result,
        })
    );

    return function cleanup() {
      mounted = false;
    };
  }, [dispatch]);

  useEffect(() => {
    dispatch({
      type: "SET_AYAH",
      currentAyah: randomAyah(0, maxAyah),
    });
  }, [dataSource]);

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

  console.log("data :", dataSource);
  console.log("current ayah :", currentAyah);
  console.log("max ayah:", maxAyah);

  return (
    <Layout>
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
    </Layout>
  );
}
