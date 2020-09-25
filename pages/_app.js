import "../styles/globals.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

function MyApp({ Component, pageProps }) {
  library.add(fab, fas);
  return <Component {...pageProps} />;
}

export default MyApp;
