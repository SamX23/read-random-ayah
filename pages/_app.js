import { useEffect, useState } from "react";
import Meta from "../components/meta";
import "../styles/globals.css";
import { StateProvider } from "../utils/context";
import { randomFetch } from "../utils/fetch";

const MyApp = ({ Component, pageProps }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    let mounted = true;
    randomFetch().then((result) => mounted && setData(result));
    return function cleanup() {
      mounted = false;
    };
  }, []);

  return (
    <StateProvider value={data}>
      <Meta />
      <Component {...pageProps} />
    </StateProvider>
  );
};

export default MyApp;
