import { useEffect } from "react";
import { useGlobalState } from "../../utils/context";
import { randomAyah } from "../../utils/randomNum";
import Ayah from "./ayah";
import AyahDescription from "./ayahDescription";
import Loading from "../loading";

const SurahLayout = ({ styles }) => {
  const [{ dataSource, currentAyah }, dispatch] = useGlobalState();
  const { data, status } = dataSource;
  const valid = status === "OK";
  const { numberOfAyahs, ayahs } = valid && data;
  const maxAyah = valid && numberOfAyahs;
  const ayah = valid && ayahs[currentAyah];

  useEffect(() => {
    dispatch({
      type: "SET_AYAH",
      currentAyah: randomAyah(0, maxAyah),
    });
  }, [dataSource]);

  return (
    <>
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
