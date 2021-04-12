import Meta from "../components/meta";
import "../styles/globals.css";
import { StateProvider } from "../utils/context";

function MyApp({ Component, pageProps }) {
  <StateProvider>
    <Meta />
    <Component {...pageProps} />
  </StateProvider>;
}

export default MyApp;
