const URLSutanlab = "https://api.quran.sutanlab.id/surah";
const URLAlquranCloud = "https://api.alquran.cloud/v1/surah";

/**
 * @param {number} surah
 * @param {number} ayah
 */

export const getTranslate = (surah, ayah) => `${URLSutanlab}/${surah}/${ayah}`;
export const getAyah = (surah) => `${URLAlquranCloud}/${surah}`;
