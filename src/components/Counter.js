import { counterActions } from "../store";
import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseByValue = () => {
    dispatch(counterActions.increase(5)); // {type: 'UNIQUE_IDENTIFIER', payload: 5}
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
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
