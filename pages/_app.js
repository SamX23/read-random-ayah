import Meta from "../components/atoms/MetaTags";
import "../styles/globals.css";
import { StateProvider } from "../utils/context";
import reducer, { initialState } from "../utils/reducer";

const MyApp = ({ Component, pageProps }) => (
  <StateProvider initialState={initialState} reducer={reducer}>
    <Meta />
    <Component {...pageProps} />
  </StateProvider>
);

export default MyApp;
