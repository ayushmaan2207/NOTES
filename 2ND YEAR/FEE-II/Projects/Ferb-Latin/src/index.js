import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Encrypt from './components/Encrypt';
import Decrypt from './components/Decrypt';

// function Logo() {
//   return(
//   <img src="logo.png" alt="logo"/>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        {/* <Encrypt/> */}
        <Decrypt/>
        {/* <App /> */}
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
