import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function decHandler() {
    if(count>0){
      setCount(count - 1);
    }
  }

  function incHandler() {
    setCount(count + 1);
  }
  function resetHandler() {
    setCount(0);
  }

  return (
    <div className="App">
      <div className="heading">Incement & Decrement</div>
      <div className="btns">
        <button className="dec" onClick={decHandler}>
          -
        </button>
        <div className="val">{count}</div>
        <button className="inc" onClick={incHandler}>
          +
        </button>
      </div>
      <button className="reset" onClick={resetHandler}>
        Reset
      </button>
    </div>
  );
}

export default App;
