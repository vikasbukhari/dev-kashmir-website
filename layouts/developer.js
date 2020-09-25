import Navbar from "../components/navbar";
import styles from "./developer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Index({ children, frontMatter }) {
  return (
    <>
      <Navbar />
      <div className="section">
        <div className="container">
          <div className={styles.header}>
            <figure className="image is-256x256">
              <img className="is-rounded" src={frontMatter.image} alt="" />
            </figure>
            <div>
              <h2 className="title is-2">{frontMatter.name}</h2>
              <h4 className="subtitle is-4">{frontMatter.address}</h4>
              <div className={styles.tags}>
                {frontMatter.tags.map((tag, idx) => (
                  <span
                    key={idx.toString()}
                    className={`tag is-rounded ${styles.tag}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className={styles.links}>
                {frontMatter.links.map((link, idx) => {
                  return (
                    <a key={idx.toString()} href={link.url}>
                      <FontAwesomeIcon icon={["fab", link.name]} size="2x" />
                    </a>
                  );
                })}
              </div>
            </div>
            <div
              className={`has-text-justified is-size-4 ${styles.description}`}
            >
              {frontMatter.description}
            </div>
          </div>
        </div>
      </div>
      <div className={`section has-text-justified content`}>
        <div className="container">{children}</div>
      </div>
    </>
  );
}
