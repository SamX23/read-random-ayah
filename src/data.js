const URL = "https://api.quran.sutanlab.id/surah";
export const getAyah = (surah, ayah) => `${URL}/${surah}/${ayah}`;
