import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { ThreeDot } from "react-loading-indicators";
import "./News.css";
import BlogDetail from "./BlogDetail";

const News = () => {
  const { load, posts } = useContext(AppContext);

  return (
    <div className="News">
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
          <div className="load">
            <img src="notfound.png" alt="page not found" />
          </div>
        ) : (
          posts.map((post, index) => (
            <BlogDetail post={post} index={index}/>
          ))
        )}
      </div>
    </div>
  );
};

export default News;
