import "./App.css";
import Testimonials from "./components/Testimonials";
import { useEffect, useState } from "react";
// npm install react-loading-indicators
import { Mosaic } from "react-loading-indicators";

function App() {
  const [data, setData] = useState();
  const [found, setFound] = useState(true);
  const [load, setLoad] = useState(true);

  async function fetchData() {
    setLoad(true);
    try {
      const response = await fetch("https://668a97c62c68eaf3211d3d02.mockapi.io/api/data/data");
      const result = await response.json();
      setData(result);
      setFound(true);
    } catch (error) {
      setFound(false);
    }
    setLoad(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      {load ? (
        <>
          <Mosaic
            color={["#c800ff", "#d8a6ff", "#8f8f8f", "#d8a6ff"]}
            size="medium"
            speedPlus="2"
            easing="ease-in-out"
          />
          <p>loading...</p>
        </>
      ) : found ? (
        <>
          <h1 className="heading">Our Testimonials</h1>
          <div className="underline"></div>
          <Testimonials data={data} />
        </>
      ) : (
        <>
          <b>DATA NOT FOUND</b>
          <img src="emptystate.png" alt="" />
        </>
      )}
    </div>
  );
}

export default App;
