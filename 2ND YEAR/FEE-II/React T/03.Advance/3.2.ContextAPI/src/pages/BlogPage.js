import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { newUrl } from "../baseUrl";
import BlogDetail from "../components/BlogDetail";
import { ThreeDot } from "react-loading-indicators";
import "./BlogPage.css";

const BlogPage = () => {
  const navigation = useNavigate();

  const [blog, setBlog] = useState(null);
  const [relatedBlog, setRelatedBlog] = useState([]);
  const location = useLocation();
  const { load, setLoad } = useContext(AppContext);

  const blogId = location.pathname.split("/").at(-1);

  async function fetchRelatedBlogs() {
    setLoad(true);
    let url = `${newUrl}?blogId=${blogId}`;
    try {
      const result = await fetch(url);
      const data = await result.json();
      setBlog(data.blog);
      setRelatedBlog(data.relatedBlogs);

      const updatedPosts = await Promise.all(
        data.relatedBlogs.map(async (post) => {
          const response = await fetch(
            "https://picsum.photos/500/250?random=1"
          );
          data.blog.img = response.url;
          post.img = response.url;
          return post;
        })
      );
    } catch (e) {
      console.log("error");
      setBlog(null);
      setRelatedBlog([]);
    }
    setLoad(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);

  return (
    <div className="BlogPost">
      <Header />
      <button className="back" onClick={() => navigation(-1)}>
        Back
      </button>
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
      ) : blog ? (
        <div className="blog">
          <BlogDetail post={blog} index="0"/>
          <h2 className="heading">Related News</h2>
          <div className="relcontainer">
            {relatedBlog.map((post) => (
              <BlogDetail post={post} />
            ))}
          </div>
        </div>
      ) : (
        <div className="load">
          <img src="notfound.png" alt="page not found" />
        </div>
      )}
    </div>
  );
};

export default BlogPage;
