import { useEffect, useState } from "react";
import { useGlobalState } from "../../utils/context";
import { randomAyah } from "../../utils/randomNum";
import Ayah from "./ayah";
import AyahDescription from "./ayahDescription";
import Loading from "../loading";
import { getTranslate } from "../../utils/data";

const SurahLayout = ({ styles }) => {
  const [{ dataSource, currentAyah }, dispatch] = useGlobalState();
  const { data, status } = dataSource;
  const valid = status === "OK";
  const { numberOfAyahs, ayahs } = valid && data;
  const maxAyah = valid && numberOfAyahs;
  const ayah = valid && ayahs[currentAyah];
  const num = valid && data.number;
  const [number, setNumber] = useState(1);
  const [translate, setTranslate] = useState({});
  const source = valid && getTranslate(number, currentAyah);

  useEffect(() => {
    dispatch({
      type: "SET_AYAH",
      currentAyah: randomAyah(0, maxAyah),
    });

    setNumber(num);

    fetch(source)
      .then((response) => response.json())
      .then((res) => setTranslate(res));
  }, [dataSource, source]);

  console.log(dataSource);
  console.log(data);
  console.log(currentAyah);
  console.log(translate);
  console.log(source);

  return (
    <>
      <div className={styles.bismillah}>
        <h1 className={styles.ayah}>بِسْمِ ٱللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</h1>
      </div>
      {valid ? (
        <>
          <Ayah styles={styles} ayah={ayah} />
          <AyahDescription
            styles={styles}
            data={data}
            ayah={ayah}
            numberOfAyahs={numberOfAyahs}
          />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default SurahLayout;
