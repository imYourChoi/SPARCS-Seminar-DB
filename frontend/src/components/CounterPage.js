import React, {useState} from "react";
import "./CounterPage.css";

const CounterPage = () => {
  const [value, setValue] = useState(0);

  const onValueDown = () => {
    // `value--`  or `value=value-1` won't work!
    setValue(value-1);
  };
  const onValueUp = () => {
    // `value--`  or `value=value-1` won't work!
    setValue(value+1);
  }
  
  return (
    <div className="counter">
      <button onClick={onValueDown}>-</button>
      <div>{value}</div>
      <button onClick={onValueUp}>+</button>
    </div>
  )
}

export default CounterPage;
