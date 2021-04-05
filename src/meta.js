import Head from "next/head";

const Meta = () => {
  return (
    <Head>
      <meta
        http-equiv="Content-Security-Policy"
        content="upgrade-insecure-requests"
      />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="description" content="A simple web app shows random ayah" />
      <meta name="keywords" content="Quran random ayah web app" />
      <title>Read Random Ayah</title>
      <meta name="msapplication-TileColor" content="#2b5797" />
      <meta name="theme-color" content="#ffffff" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <link rel="manifest" href="/manifest.json" />
      <link
        rel="prefetch"
        href="/Assets/font/me_quran_volt_newmet.ttf"
        as="font"
      />
      <link rel="preconnect" href="https://api.alquran.cloud" />
    </Head>
  );
};

export default Meta;
