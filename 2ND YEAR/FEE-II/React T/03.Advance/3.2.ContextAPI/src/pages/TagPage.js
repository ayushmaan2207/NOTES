import React from "react";
import Header from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import News from "../components/News";
import Paging from "../components/Paging";

const TagPage = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);

  return (
    <div>
      <Header />
      <button className="back" onClick={() => navigation(-1)}>
        Back
      </button>
      <div className="headcont">
        <div className="head">
          <div className="line"></div>
          <div className="mid">
            News Tagged <span></span>
            {tag}
          </div>
          <div className="line"></div>
        </div>
      </div>
      <News />
      <Paging />
    </div>
  );
};

export default TagPage;
