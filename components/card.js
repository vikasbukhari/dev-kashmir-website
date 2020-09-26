import styles from "./card.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Card(props) {
  const { data } = props;
  return (
    <div className={"card"}>
      <div className={styles.card_inner}>
        <div className="card-image">
          <figure className="image">
            <img src={data.image || `/user-placeholder.png`} alt={data.name} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{data.name}</p>
              <p className="subtitle is-6">{data.address}</p>
            </div>
          </div>
          <div className="content">
            <div className={styles.tags}>
              {data.tags.map((tag,idx) => (
                <span key={idx.toString()} className={`tag is-rounded ${styles.tag}`}>{tag}</span>
              ))}
            </div>
            {data.description}
          </div>
        </div>
      </div>
      <footer className="card-footer">
        <div className={styles.links}>
          {data.links.map((link,idx) => {
            return (
              <a alt={link.name} key={idx.toString()} href={link.url}>
                <FontAwesomeIcon icon={["fab", link.name]} size="2x" />
                <FontAwesomeIcon icon={link.name} size="2x" />

              </a>
            );
          })}
        </div>
      </footer>
    </div>
  );
}
