import { Chakra } from "../src/Chakra";
import Meta from "../src/meta";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Chakra>
      <Meta />
      <Component {...pageProps} />
    </Chakra>
  );
}

export default MyApp;
