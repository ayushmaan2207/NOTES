import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Mosaic } from "react-loading-indicators";
import Card from "./Card";

const News = () => {
  const { load, posts } = useContext(AppContext);

  return (
    <div className="News">
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
      ) : (posts.length === 0 ? (
        <div>
          <p>No News Found</p>
        </div>
      ) : (
        posts.map((post) => <Card post={post} key ={post.id}/>)
      ))}
    </div>
  );
};

export default News;
