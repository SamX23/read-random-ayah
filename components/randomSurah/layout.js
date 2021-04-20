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

  const dataNumber = valid && data.number;
  const [numberSurah, setNumberSurah] = useState(1);
  const [translate, setTranslate] = useState({});
  const source = valid && getTranslate(numberSurah, currentAyah + 1);
  const dataTranslate = translate.data;

  useEffect(() => {
    dispatch({
      type: "SET_AYAH",
      currentAyah: randomAyah(0, maxAyah),
    });
  }, [dataSource]);

  useEffect(() => {
    let mounted = true;
    setNumberSurah(dataNumber);
    fetch(source)
      .then((response) => response.json())
      .then((res) => mounted && setTranslate(res))
      .catch((err) => console.log("Error : ", err));
    return function cleanup() {
      mounted = false;
    };
  }, [currentAyah, numberSurah]);

  return (
    <>
      <div className={styles.bismillahContainer}>
        <h1 className={styles.ayah}>بِسْمِ ٱللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</h1>
      </div>
      {valid ? (
        <>
          <Ayah styles={styles} ayah={ayah} text={dataTranslate} />
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
