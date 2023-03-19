import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useGlobalState } from "../../../utils/context";
import { randomAyah } from "../../../utils/randomNum";
import AyahNavigation from "./AyahNavigation";
import Loading from "../../atoms/Loading";
import { getTranslate } from "../../../utils/data";

const Ayah = dynamic(() => import("./AyahItem"), {
  loading: () => <Loading />,
});

const SurahLayout = ({ styles }) => {
  const [{ dataSource, currentAyah }, dispatch] = useGlobalState();
  const [numberSurah, setNumberSurah] = useState(1);
  const [translate, setTranslate] = useState({});

  const { data, status } = dataSource;
  const valid = status === "OK";
  const source = getTranslate(numberSurah, currentAyah + 1);

  useEffect(() => {
    if (valid) {
      const maxAyah = data?.numberOfAyahs;

      dispatch({
        type: "SET_AYAH",
        currentAyah: randomAyah(0, maxAyah),
      });
    }
  }, [dataSource]);

  useEffect(() => {
    let mounted = true;

    if (valid) {
      setNumberSurah(data?.number);
      fetch(source)
        .then((response) => response.json())
        .then((res) => mounted && setTranslate(res))
        .catch((err) => console.log("Error : ", err));
    }

    console.log("asd");

    return () => {
      mounted = false;
    };
  }, [currentAyah, numberSurah]);

  return (
    <>
      {valid ? (
        <>
          <Ayah
            styles={styles}
            ayah={data?.ayahs[currentAyah]}
            text={translate?.data}
          />
          <AyahNavigation
            styles={styles}
            data={data}
            ayah={data?.ayahs[currentAyah]}
            numberOfAyahs={data?.numberOfAyahs}
          />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default SurahLayout;
