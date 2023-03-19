import { useEffect, useMemo, useState } from "react";
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

  const ayah = useMemo(() => data?.ayahs[currentAyah], [currentAyah, data]);
  const numberOfAyahs = useMemo(() => data?.numberOfAyahs, [data]);

  useEffect(() => {
    valid &&
      dispatch({
        type: "SET_AYAH",
        currentAyah: randomAyah(0, numberOfAyahs),
      });
  }, [dispatch, numberOfAyahs, valid]);

  useEffect(() => {
    let mounted = true;

    valid && mounted && setNumberSurah(data?.number);

    const fetchTranslate = async () => {
      try {
        const response = await fetch(source);
        const res = await response.json();
        setTranslate(res);
      } catch (err) {
        console.log("Error : ", err);
      }
    };

    valid && fetchTranslate();

    return () => {
      mounted = false;
    };
  }, [data?.number, source, valid]);

  return (
    <>
      {valid ? (
        <>
          <Ayah styles={styles} ayah={ayah} text={translate?.data} />
          <AyahNavigation
            styles={styles}
            data={data}
            ayah={ayah}
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
