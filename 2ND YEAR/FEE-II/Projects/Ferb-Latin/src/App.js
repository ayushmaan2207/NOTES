import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <div className="colr"></div>
        <div className="cont">
          <div className="logo">
            <img src="logo.png" alt="logo" />
          </div>
          <div className="container">
            <div className="top">
              {" "}
              Welcome to <span>SecureCrypt</span>,
            </div>
            <div className="bottom">
              Protect your text messages with our advanced encryption and
              decryption solutions.
            </div>
          </div>
          <div className="btns">
            <button className="enc">Encrypt</button>
            <button className="dec">Decrypt</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
