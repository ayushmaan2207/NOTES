import React,{useState} from 'react'
import "./Testimonials.css"
import { FaQuoteLeft,FaQuoteRight,FaChevronLeft,FaChevronRight } from "react-icons/fa";

const Testimonials = ({data}) => {
  const [index,setIndex]= useState(0);
  const currentData= data[index];

  function leftHandler(){
    if(index-1 <0){
      setIndex(data.length-1);
    }
    else{
      setIndex(index-1);
    }
  }

  function rightHandler(){
    if(index+1 >= data.length){
      setIndex(0);
    }
    else{
      setIndex(index+1);
    }
  }

  function surpriseHandler(){
    setIndex(Math.floor(Math.random() * data.length));
  }

  return (
    <div className='card'>
      <div className='image'>
        <img className='imgg' src={currentData.image} alt="" />
        <div className="backimg"></div>
      </div>
      <div className='head'>
        <h2 className='name'>{currentData.name}</h2>
        <h5 className='job'>{currentData.job}</h5>
      </div>
      <div className="body">
        < FaQuoteLeft className="btn"/>
        <p>{currentData.description}</p>
        <FaQuoteRight className="btn"/>
      </div>
      <div className="buttons">
        <div className="navigate">
          <button className="btn nn" onClick={leftHandler}><FaChevronLeft/></button>
          <button className="btn nn" onClick={rightHandler}><FaChevronRight/></button>
        </div>
        <button onClick={surpriseHandler} className="surprise">Surprise Me</button>
      </div>
    </div>
  )
}

export default Testimonials
