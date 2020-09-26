import Navbar from "../components/navbar";
import { NextSeo } from "next-seo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../components/footer";
import CardGrid from "../components/cardgrid";
import { frontMatter as team1 } from "../pages/devs/haideralipunjabi.mdx";
import { frontMatter as team2 } from "../pages/devs/bassamismail.mdx";
import styles from "./about.module.scss"
export default function Nominate() {
  return (
    <>
      <NextSeo
        title="About - Kashmiri Devs"
        canonical="https://kashmiri.dev/about"
        openGraph={{
          title: "Nominate - Kashmiri Devs",
          url: "https://kashmiri.dev/about",
        }}
      />
      <Navbar />
      <div className="section">
        <div className="container">
          <h1 className="title is-size-1">
            About this <highlight>project</highlight>
          </h1>
          <div className="section has-text-justified content">
            Kashmiri Devs is a living directory of thriving Kashmiris in the
            programming industry. Our mission is to create a community of
            developers from Kashmir, so that we can find talented people to
            befriend, coomunicate and work with.
          </div>
          <h3 className="is-size-3">Request an edit</h3>
          <div className="section has-text-justified content">
            If you have been added to the directory and would like to opt out or
            make an edit to your profile, please send us a message on Twitter to{" "}
            <a href="https://twitter.com/kashmiridev" target="blank">
              @kashmiridev
            </a>{" "}
            or create a PR on our{" "}
            <a
              href="https://github.com/dev-kashmir/dev-kashmir-website"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Repository
            </a>
          </div>
          <h3 className="is-size-3">Team behind this</h3>
          <div className={`${styles.grid} grid`}>
            <CardGrid devsFromProps={[team1, team2]} />
          </div>{" "}
        </div>
      </div>
      <Footer />
    </>
  );
}
