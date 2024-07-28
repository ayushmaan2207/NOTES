import React from "react";
import "./BlogDetail.css"
import { NavLink } from "react-router-dom";

const BlogDetail = ({ post, index }) => {
  return (

    <div
      key={index}
      style={{ gridArea: `item${index}` }}
      className={`Card card${index}`}
    >
      <div className="imgcont">
        <img className="image" src={post.img} alt="Random" />
      </div>

      <div className="text">
        <NavLink to={`/blog/${post.id}`}>
          <p className="title">{post.title}</p>
        </NavLink>
        <p className="author">
          By <span>{post.author}</span> on{" "}
          <span>
            <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
              <b>{post.category}</b>
            </NavLink>
          </span>
        </p>

        <p className="date">Posted on {post.date}</p>
        <p className="content">{post.content}</p>
        <div className="tags">
          {post.tags.map((tag, index) => (
            <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
              <span>{` #${tag}`}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
