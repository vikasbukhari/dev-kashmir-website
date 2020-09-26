import styles from "./cardgrid.module.scss";
import Card from "./card";
import { frontMatter as devs } from "../pages/devs/*.mdx";
export default function CardGrid(props) {
  const { devsFromProps } = props;
  return (
    <>
      {(devsFromProps||devs).map((dev, idx) => {
        return <Card data={dev}></Card>;
      })}
    </>
  );
}

