import React, { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;



const useGif = (tag) => {
    
    const randomUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const tagUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

    const [gif, setGif] = useState("");
    const [load, setLoad] = useState(true);
  
  
    async function fetchData() {
      setLoad(true);
      const { data } = await axios.get(tag ? tagUrl : randomUrl);
      const imgSource = data.data.images.downsized_large.url;
      setGif(imgSource);
      setLoad(false);
    }
  
    useEffect(() => {
      fetchData();
    },[]);
    return {gif,load,fetchData};
}

export default useGif
