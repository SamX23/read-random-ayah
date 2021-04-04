const URLSutanlab = "https://api.quran.sutanlab.id/surah";
const URLAlquranCloud = "https://api.alquran.cloud/v1/surah";
const CDNAlquranCloud = "https://cdn.alquran.cloud/media/image";

export const getTranslate = (surah, ayah) => `${URLSutanlab}/${surah}/${ayah}`;
export const getAyah = (surah) => `${URLAlquranCloud}/${surah}`;
export const getAyahCdn = (surah, ayah) =>
  `${CDNAlquranCloud}/${surah}/${ayah}`;
