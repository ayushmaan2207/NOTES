import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// npm i react-toastify
import {ToastContainer} from "react-toastify";
import "react-toastify/ReactToastify.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <App />
        <ToastContainer />
    </div>
);

