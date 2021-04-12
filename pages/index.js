import Nav from "../components/nav";
import styles from "../styles/Home.module.css";
import Surah from "../components/surah";
import SurahDescription from "../components/surahDescription";
import { useGlobalState } from "../utils/context";
import { randomAyah } from "../utils/randomNum";

export default function Home() {
  const result = useGlobalState();
  const valid = result.status === "OK";
  const data = result.data;
  const maxAyah = valid && data.numberOfAyahs;
  const numberAyah = randomAyah(0, maxAyah);
  const surah = valid && data.number;
  const ayah = valid && data.ayahs[numberAyah];

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
          <Surah styles={styles} valid={valid} data={data} ayah={ayah} />
          <SurahDescription
            styles={styles}
            valid={valid}
            data={data}
            ayah={ayah}
            surah={surah}
          />
        </div>
      </main>
    </>
  );
}
