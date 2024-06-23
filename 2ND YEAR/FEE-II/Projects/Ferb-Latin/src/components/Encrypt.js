import "./Encrypt.css";
import React,{useState} from "react";

const Encrypt = () => {
  const[encrpt,setEnncrpt]= useState('');

  function changeHandler(event){
      setEnncrpt(event.target.value);
  }
  function clickHandler(){
    let arr= encrpt.split(" ");
    for(let i=0;i<arr.length;i++){
      if(arr[i].length>1){
        arr[i]=arr[i].slice(1,)+arr[i][0]+'erb';
      }
      else{
        arr[i]+='ja';
      }
    }
    arr=arr.join(" ");
    console.log(arr);
    let ele= document.querySelector('.created')
    ele.textContent=`${arr}`;


  }
  function submitHandler(event){
    event.preventDefault();
    setEnncrpt('');
  }
  return (
    <>
      <div className="Encrypt">
        <div className="clr1"></div>
        <div className="clr2"></div>
        <div className="contt">
          <div className="logoe">
            <img src="logo.png" alt="logo" />
          </div>
          <div className="containere">
            <div className="tope">
              Welcome to <span>SecureCrypt</span>,
            </div>
            <div className="bottome">
              Protect your text messages with our advanced encryption and
              decryption solutions.
            </div>
          </div>
        </div>
        <form onSubmit={submitHandler} className="btnse">
          <textarea value={encrpt} onChange={changeHandler} className="dece" placeholder="Write the text you want to Encrypt."></textarea>
          <button onClick={clickHandler} className="ence">Encrypt</button>
          <div className="created"></div>
        </form>
      </div>
    </>
  );
};

export default Encrypt;
