import WayToTeach from "../components/WayToTeach";
import { ways } from "../data";

export default function Teacginh() {
  return (
    <section>
      <h3>Подход к обучению</h3>
      <ul>
        {ways.map((way) => {
          return (
            <WayToTeach
              key={way.title}
              title={way.title}
              description={way.description}
            />
          );
        })}
      </ul>
    </section>
  );
}
