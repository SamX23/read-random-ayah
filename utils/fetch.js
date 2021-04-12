import { getAyah } from "./data";
import { randomSurah } from "./randomNum";

const numberSurah = randomSurah(1, 114);
const source = getAyah(numberSurah);

export const randomFetch = async () =>
  await fetch(source)
    .then((response) => response.json())
    .catch((error) => console.log("Info : ", error));
