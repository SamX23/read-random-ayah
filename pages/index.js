import { useEffect } from "react";
import randomFetch from "../utils/fetch";
import Layout from "../components/templates/layout";
import SurahLayout from "../components/organisms/AyahBody";
import styles from "../styles/Home.module.css";
import { useGlobalState } from "../utils/context";

export default function Home() {
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
      <main className={styles.main}>
        {dataSource && <SurahLayout styles={styles} />}
      </main>
    </Layout>
  );
}
