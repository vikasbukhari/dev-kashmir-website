import Navbar from "../components/navbar";
import CardGrid from "../components/cardgrid";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className={"grid"}>
        <div className={"logo"}>
          <h3>
            Kashmiris <br /> Who <highlight>Code</highlight>
          </h3>
        </div>
        <CardGrid></CardGrid>
      </div>
    </>
  );
}
