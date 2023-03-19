const URLSUTANLAB = "https://api.quran.gading.dev/surah";
const URLALQURANCLOUD = "https://api.alquran.cloud/v1/surah";

/**
 * @param {number} surah
 * @param {number} ayah
 */

export const getTranslate = (surah, ayah) => `${URLSUTANLAB}/${surah}/${ayah}`;
export const getAyah = (surah) => `${URLALQURANCLOUD}/${surah}`;
