import { useState } from "react";
import "../App.css";

function Numbers() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  }

  function minus(e) {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  }

  function times(e) {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  }

  function divide(e) {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  }

  function resetInput(e) {
    e.preventDefault();
    inputRef.current(value.slice(0, -1));
  }

  function resetResult(e) {
    e.preventDefault();
    setResult((prevVal) => prevVal * 0);
  }

  return (
    <form action="">
      <div className="display">
        <input type="text" />
      </div>
      <div>
        <button onClick={resetInput}>AC</button>
        <button onClick={resetInput}>DE</button>
        <button>.</button>
        <button onClick={divide}>÷</button>
      </div>
      <div>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button onClick={times}>×</button>
      </div>
      <div>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button onClick={plus}>+</button>
      </div>
      <div>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button onClick={minus}>−</button>
      </div>
      <div>
        <button>0</button>
        <button>=</button>
      </div>
    </form>
  );
}

export default Numbers;
