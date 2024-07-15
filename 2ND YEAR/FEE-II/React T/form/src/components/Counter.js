import React,{useState} from 'react'
import './Counter.css'
import { useNavigate } from 'react-router-dom';

function Counter() {
    const navigate= useNavigate();

    function clickHandler(){
      navigate("/Form");
      
      // navigate(-1); // -1 for previous page
    }

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
      <div className="Counter">
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
        <button className="reset" onClick={clickHandler}>
          Navigate to Form
        </button>
      </div>
    );
}

export default Counter
