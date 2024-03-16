import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./CounterSlice"; // Assuming you have defined these actions in a separate file

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <section>
      <h1>{count}</h1>
      <div>
        <button onClick={() => dispatch(increment())}>
          <span role="img" aria-label="plus">
            ➕
          </span>{" "}
          Increment
        </button>
        <button onClick={() => dispatch(decrement())}>
          <span role="img" aria-label="minus">
            ➖
          </span>{" "}
          Decrement
        </button>
      </div>
    </section>
  );
};

export default Counter;
