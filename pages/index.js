import { useEffect } from "react";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";
import SurahLayout from "../components/randomSurah/layout";
import { useGlobalState } from "../utils/context";
import { randomFetch } from "../utils/fetch";

export default function Home() {
  // eslint-disable-next-line no-empty-pattern
  const [{ dataSource }, dispatch] = useGlobalState();

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

  return (
    <Layout>
      <main className={styles.container}>
        <div className={styles.main}>
          <div className={styles.bismillah}>
            <h1 className={styles.ayah}>
              بِسْمِ ٱللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
            </h1>
          </div>
          {dataSource && <SurahLayout styles={styles} />}
        </div>
      </main>
    </Layout>
  );
}
