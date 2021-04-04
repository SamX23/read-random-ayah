import Head from "next/head";
import { useEffect, useState } from "react";
import { getAyah, getAyahCdn } from "../src/data";
import { randomSurah, randomAyah } from "../src/randomNum";
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
  const source_cdn = getAyahCdn(surah, ayah.numberInSurah);

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

  // console.log(data);
  // console.log(source_cdn);

  return (
    <div className={styles.container}>
      <Head>
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
        <title>Read Random Ayah</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h3 className={styles.bismillah}>
          بِسْمِ ٱللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
        </h3>
        {text.status === "OK" ? (
          <div className={styles.ayah}>
            <h1>
              {data.englishName} : {surah}
            </h1>
            <img src={source_cdn} alt={data.englishName} />
          </div>
        ) : (
          <>
            <h1>please wait.. :)</h1>
          </>
        )}
      </main>
    </div>
  );
}
