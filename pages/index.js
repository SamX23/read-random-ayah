import Head from "next/head";
import { useEffect, useState } from "react";
import { getAyah } from "../src/data";
import { randomSurah, randomAyah } from "../src/randomNum";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [text, setText] = useState({});
  const ayah = () => randomAyah(1, 9);
  const get = getAyah(1, ayah());
  useEffect(() => {
    fetch(get)
      .then((response) => response.json())
      .then((data) => setText(data))
      .catch((error) => console.log("Fetch error : "));
  }, []);

  console.log(text);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>{text.status === "OK." ? text.data.text.arab : null}</h1>
        <h2>{text.status === "OK." ? text.data.translation.id : null}</h2>
      </main>
    </div>
  );
}
