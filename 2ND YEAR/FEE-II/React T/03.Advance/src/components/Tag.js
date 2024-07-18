import "./Tag.css";
import React, {useState } from "react";
import { Mosaic } from "react-loading-indicators";
import useGif from "../hooks/useGif";

const Tag = () => {
  const [tag, setTag] = useState("");
  const {gif,load,fetchData}= useGif(tag);


  function changeHandler(event){
    setTag(event.target.value);
  }


  return (
    <div className="Tag">
      <h1>Random {tag} GIF</h1>
      {load ? (
        <div className="load">
          <Mosaic
            color={["#254886", "#00b3ff", "#256986", "#6396ee"]}
            size="medium"
            speedPlus="2"
            easing="ease-in-out"
          />
          <p>loading...</p>
        </div>
      ) : (
        <img src={gif} alt={tag} />
      )}
    <input type="text" 
    placeholder="type..."
    onChange={changeHandler}
      value={tag}
    />
      <button onClick={()=> fetchData()}>GENERATE</button>
    </div>
  );
};

export default Tag;
