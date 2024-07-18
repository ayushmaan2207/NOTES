import "./Tag.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Mosaic } from "react-loading-indicators";

const API_KEY = process.env.REACT_APP_API_KEY;
console.log("API Key:", API_KEY);

const Tag = () => {
  const [gif, setGif] = useState("");
  const [tag, setTag] = useState("");
  const [load, setLoad] = useState(true);

  function changeHandler(event){
    setTag(event.target.value);
  }

  async function fetchData() {
    setLoad(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=HkUQ363NYorKXGUe2iMkduBdTPyBD8gM&tag=${tag}`;
    const { data } = await axios.get(url);
    const imgSource = data.data.images.downsized_large.url;
    setGif(imgSource);
    setLoad(false);
  }

  useEffect(() => {
    fetchData();
  },[]);

  function clickHandler() {
    fetchData();
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
      <button onClick={clickHandler}>GENERATE</button>
    </div>
  );
};

export default Tag;
