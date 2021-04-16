import { getAyah } from "./data";
import { randomSurah } from "./randomNum";

const numberSurah = randomSurah(1, 114);
const source = getAyah(numberSurah);
// const longestAyah = getAyah(2);

const randomFetch = async () =>
  fetch(source)
    .then((response) => response.json())
    .catch((error) => console.log("Info : ", error));

export default randomFetch;
