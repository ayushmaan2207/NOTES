import React from "react";
import { useState } from "react";
import "./Login.css";

function Login() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidate: false,
    offers: false,
    pushNotification: "",
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => {
      return { ...prev, [name]: type === "checkbox" ? checked : value };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
  }

  return (
    <div className="Form">
      <form onSubmit={submitHandler}>
        <h1 className="head">Log In</h1>

        <label>
          <h3>
            First Name <sup>*</sup>
          </h3>
          <input required type="text" />
        </label>

        <label>
          <h3>Last Name</h3>
          <input type="text" />
        </label>

        <label>
          <h3>
            Email <sup>*</sup>
          </h3>
          <input required type="email" />
        </label>

        <div className="pass">
          <label>
            <h3>
              Password <sup>*</sup>
            </h3>
            <input required type="password" />
          </label>
          <label>
            <h3>
              Confirm Password <sup>*</sup>
            </h3>
            <input required type="password" />
          </label>
        </div>

        <button>Log In</button>
      </form>
      <div className="image">
        <img src="login.png" alt="login" />
      </div>
    </div>
  );
}

export default Login;
