import { differences } from "../data";
import Button from "../components/Button/Button";
import { useState } from "react";

export default function Differences() {
  const [contentType, setContentType] = useState(null);

  function handleClick(type) {
    setContentType(type);
  }

  return (
    <section>
      <h3>Чем мы отличаемся от других</h3>
      <Button
        isActive={contentType === "way"}
        buttonClicked={() => handleClick("way")}
      >
        Подход
      </Button>
      <Button
        isActive={contentType === "easy"}
        buttonClicked={() => handleClick("easy")}
      >
        Доступность
      </Button>
      <Button
        isActive={contentType === "program"}
        buttonClicked={() => handleClick("program")}
      >
        Концентрация
      </Button>
      {!contentType ? <p>Нажми на кнопку</p> : null}
      {contentType ? <p>{differences[contentType]}</p> : null}
    </section>
  );
}
