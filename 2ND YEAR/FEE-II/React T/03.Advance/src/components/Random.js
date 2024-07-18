import React, { useEffect, useState } from "react";
import "./Random.css";
import axios from "axios";
import { Mosaic } from "react-loading-indicators";

const API_KEY = process.env.API_key;

const Random = () => {
  const [gif, setGif] = useState("");
  const [load, setLoad] = useState(true);

  async function fetchData() {
    setLoad(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=HkUQ363NYorKXGUe2iMkduBdTPyBD8gM`;
    const { data } = await axios.get(url);
    const imgSource = data.data.images.downsized_large.url;
    setGif(imgSource);
    setLoad(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function clickHandler() {
    fetchData();
  }

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
        <img src={gif} />
      )}

      <button onClick={clickHandler}>GENERATE</button>
    </div>
  );
};

export default Random;
