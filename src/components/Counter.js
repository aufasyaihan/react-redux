import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);
  const toggleCounterHandler = () => {
    dispatch({ type: "TOGGLE" });
  };

  const incrementHandler = () => {
    dispatch({ type: "INCREMENT" });
  };

  const increaseByValue = () => {
    dispatch({ type: "INCREASE", amount: 5 });
  };
  const decrementHandler = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && (
        <>
          <div className={classes.value}>
            <button onClick={decrementHandler}>-</button>
            {counter}
            <button onClick={incrementHandler}>+</button>
          </div>
          <div>
            <button className={classes.button} onClick={increaseByValue}>
              +5
            </button>
          </div>
        </>
      )}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
