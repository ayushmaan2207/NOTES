import React from "react";
import "./Random.css";
import { Mosaic } from "react-loading-indicators";
import useGif from "../hooks/useGif";

const Random = () => {

  const {gif,load,fetchData}= useGif();

  return (
    <div className="Random">
      <h1>Random GIF</h1>
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
        <img src={gif} alt='gif' />
      )}

      <button onClick={()=>fetchData()}>GENERATE</button>
    </div>
  );
};

export default Random;
