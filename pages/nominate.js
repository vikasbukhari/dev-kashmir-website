import Navbar from "../components/navbar";
import { NextSeo } from 'next-seo';

export default function Nominate() {
  return (
    <>
      <NextSeo
      title="Nominate - Kashmiri Devs"
      canonical="https://kashmiridevs.vercel.app/nominate"
      openGraph={{
        title: "Nominate - Kashmiri Devs",
        url:   "https://kashmiridevs.vercel.app/nominate"
      }}
      />
      <Navbar />
      <div className="section">
        <div className="container">
          <h1 className="title is-size-1">
            Nominate a <highlight>Developer</highlight>
          </h1>
          <div className="section has-text-justified content">
            Help us build the directory of Kashmiris thriving in the field of
            programming. If you know someone who deserves to be on the list, nominate
            them by clicking the Nominate button and filling the form. And hey,
            it's alright to nominate yourself. 😊
          </div>
          <a href="https://forms.gle/a8eWcAMFWxyqDKG9A" target="_blank" className="button is-large">Nominate</a>
        </div>
      </div>
    </>
  );
}
