import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { ThreeDot } from "react-loading-indicators";
import Card from "./Card";
import "./News.css";

const News = () => {
  const { load, posts } = useContext(AppContext);

  return (
    <div className="News">
      <div className="head">
        <div className="line"></div>
        <div className="mid">News Bulletin</div>
        <div className="line"></div>
      </div>

      <div className="container">
        {load ? (
          <div className="load">
            <ThreeDot
              color={["#254886", "#00b3ff", "#256986", "#6396ee"]}
              size="medium"
              speedPlus="1"
              easing="ease-in-out"
            />
            <p>loading...</p>
          </div>
        ) : posts.length === 0 ? (
          <div>
            <p>No News Found</p>
          </div>
        ) : (
          posts.map((post,index) => <Card index={index+1} post={post} key={index} />)
        )}
      </div>
    </div>
  );
};

export default News;
