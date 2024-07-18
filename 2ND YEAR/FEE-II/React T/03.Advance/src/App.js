import "./App.css";
// npm i axios //(to install axios another way to fetch API)
import Tag from "./components/Tag";
import Random from "./components/Random";

function App() {
  return (
    <div className="App">
      <h1 className="heading"> RANDOM GIFS</h1>
      <div className="main">
        <Random />
        <Tag />
      </div>
    </div>
  );
}

export default App;
