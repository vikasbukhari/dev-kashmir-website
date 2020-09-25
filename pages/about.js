import Navbar from "../components/navbar";
import Link from "next/link";
export default function About() {
  return (
    <>
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
