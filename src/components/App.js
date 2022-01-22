import "./app.scss";
import { Counter } from "./counter/Counter";
export const App = () => {
  return (
    <div className="app">
      <Counter a="dads" />
      <Counter a="as" />
      <Counter a="jej" />
      <Counter a="krwa" />
      <Counter a="fdsaf" />
    </div>
  );
};
