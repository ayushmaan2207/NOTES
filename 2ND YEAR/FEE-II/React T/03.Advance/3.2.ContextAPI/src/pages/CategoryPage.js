import React from "react";
import Header from "../components/Header";
import News from "../components/News";
import Paging from "../components/Paging";
import { useLocation, useNavigate } from "react-router-dom";

const CategoryPage = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const category = location.pathname.split("/").at(-1);

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
            News on <span></span>
            {category}
          </div>
          <div className="line"></div>
        </div>
      </div>
      <News />
      <Paging />
    </div>
  );
};

export default CategoryPage;
