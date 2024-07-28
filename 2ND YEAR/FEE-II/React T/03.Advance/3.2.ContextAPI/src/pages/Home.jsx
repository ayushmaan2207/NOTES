import React from "react";
import Header from "../components/Header";
import News from "../components/News";
import Paging from "../components/Paging";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="headcont">
        <div className="head">
          <div className="line"></div>
          <div className="mid">News Bulletin</div>
          <div className="line"></div>
        </div>
      </div>
      <News />
      <Paging />
    </div>
  );
};

export default Home;
