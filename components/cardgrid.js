import styles from "./cardgrid.module.scss";
import Card from "./card";
import devs from "../data/developers.json";
export default function CardGrid() {
  devs.length = 50;
  devs.fill(devs[0]);
  return (
    <>
      {devs.map((dev, idx) => {
        return <Card key={idx.toString()} data={dev}></Card>;
      })}
    </>
  );
}
