import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { ThreeDot } from "react-loading-indicators";
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
            <img src="notfound.png" alt="page not found" />
          </div>
        ) : (
          posts.map((post, index) => (
            <div
              key={index}
              style={{ gridArea: `item${index}` }}
              className={`Card card${index}`}
            >
              <div className="imgcont">
                <img className="image" src={post.img} alt="Random" />
              </div>
              <div className="text">
                <p className="title">{post.title}</p>
                <p className="author">
                  By <span>{post.author}</span> on <span>{post.category}</span>
                </p>
                <p className="date">Posted on {post.date}</p>
                <p className="content">{post.content}</p>
                <div className="tags">
                  {post.tags.map((tag, index) => (
                    <span key={index}>{` #${tag}`}</span>
                  ))}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default News;
