import { useState, useEffect } from "react";
import "./counter.scss";

export const Counter = ({ a }) => {
  const [liczba, setLiczba] = useState(0);
  const [moreThan10, setMoreThan10] = useState(false);

  const checkNumber = (someNum) => {
    setMoreThan10(false);
    if (someNum > 10) {
      setMoreThan10(true);
    }
  };
  useEffect(() => {
    checkNumber(liczba);
  }, [liczba]);
  return (
    <div className="app__counter">
      <h1>{a}</h1>
      <p className="app__counter__text">siema to licznik {liczba}</p>
      <button
        className="app__counter__button__add"
        onClick={() => setLiczba(liczba + 1)}
      >
        Dodaj 1
      </button>
      <button
        className="app__counter__button__sub"
        onClick={() => setLiczba(liczba - 1)}
      >
        Odejmij 1
      </button>
      {moreThan10 && (
        <p className="app__counter__text">siema to licznik {liczba}</p>
      )}
    </div>
  );
};
