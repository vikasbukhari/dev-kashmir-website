import styles from "./cardgrid.module.scss";
import Card from "./card";
import { frontMatter as devs } from "../pages/devs/*.mdx";
import Link from "next/link";
export default function CardGrid() {
  return (
    <>
      {devs.map((dev, idx) => {
        return (
          <Link key={idx.toString()} href={formatPath(dev.__resourcePath)}>
            <a>
              <Card data={dev}></Card>
            </a>
          </Link>
        );
      })}
    </>
  );
}
function formatPath(p) {
  return p.replace(/\.mdx$/, "");
}
