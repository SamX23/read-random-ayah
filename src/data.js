const URLSutanlab = "https://api.quran.sutanlab.id/surah";
const URLAlquranCloud = "http://api.alquran.cloud/v1/surah";

export const getTranslate = (surah, ayah) => `${URLSutanlab}/${surah}/${ayah}`;
export const getAyah = (surah) => `${URLAlquranCloud}/${surah}`;
