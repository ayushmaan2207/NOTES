import React from "react";
import "./Card.css";

const Card = ({ post, index }) => {
  return (
    <div style={{ gridArea: `item${index}` }} className={`Card card${index}`}>
      <img className="image" alt={post.img} src="banner.png" />
      <div className="text">
        <p className="title">{post.title}</p>
        <p className="author">
          By <span>{post.author}</span> on <span>{post.category}</span>{" "}
        </p>
        <p className="date">Posted on {post.date}</p>
        <p className="content">{post.content}</p>
        <div className="tags">
          {post.tags.map((tag, index) => {
            return <span key={index}>{` #${tag}`}</span>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
