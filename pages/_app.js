import "../styles/globals.scss";
import { DefaultSeo } from "next-seo";
import Head  from "next/head";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

function MyApp({ Component, pageProps }) {
  library.add(fab, fas);
  const title = "Kashmiri Devs"
  const description = "The directory of Kashmiris thriving in the field of programming."
  const url = "https://kashmiri.dev/"
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c"></meta>
        <meta
          name="msapplication-config"
          content="/favicons/browserconfig.xml"
        ></meta>
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <DefaultSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          type:'website',
          locale: 'en_US',
          url: url,
          title: title,
          description:description,
          images:[
            {
              url:'/og.png',
              width:2502,
              height:1408,
              alt:'OG Image'
            }
          ],
          site_name: title
        }}
        
      />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
