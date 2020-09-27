import Navbar from "../components/navbar";
import styles from "./developer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextSeo } from "next-seo";
import Footer from "../components/footer";

export default function Index({ children, frontMatter }) {
  return (
    <>
      <NextSeo
        title={`${frontMatter.name} - Kashmiri Devs`}
        description={frontMatter.description}
      />
      <Navbar />
      <div className="section">
        <div className="container">
          <div className={styles.header}>
            <figure className="image is-256x256">
              <picture>
                <source
                  srcSet={require(`../public/images/devs/${
                    frontMatter.image || "user-placeholder.png"
                  }?webp`)}
                  alt={frontMatter.name}
                  type="image/webp"
                />
                <img
                  className="is-rounded image is-256x256"
                  src={require(`../public/images/devs/${
                    frontMatter.image || "user-placeholder.png"
                  }`)}
                  alt={frontMatter.name}
                />
              </picture>
            </figure>
                  
            <div className={styles.developerPage}>
              <h2 className="title">{frontMatter.name}</h2>
              <h4 className="subtitle">{frontMatter.address}</h4>
              <div className={styles.tags}>
                {frontMatter.tags.map((tag, idx) => (
                  <span
                    key={idx.toString()}
                    className={`tag is-rounded is-success ${styles.tag}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className={styles.links}>
                {frontMatter.links.map((link, idx) => {
                  return (
                    <a
                      alt={link.name}
                      key={idx.toString()}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={["fab", link.name]} size="2x" />
                      <FontAwesomeIcon icon={link.name} size="2x" />
                    </a>
                  );
                })}
              </div>
            </div>
            <div
              className={`text-desc is-size-5 is-primary ${styles.description}`}
            >
              {frontMatter.description}
            </div>
          </div>

        </div>
      </div>
      <div className= {styles.devQA}>

       <div className={`section content is-size-6`}>
         
        <div className="container">
          
          {children}
          
          </div>
       
      </div>
      </div>
      
      <Footer />
    </>
  );
}
