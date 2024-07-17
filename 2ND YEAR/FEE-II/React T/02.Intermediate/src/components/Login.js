import React from "react";
import { useState } from "react";
import "./Login.css";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Login({ setisLoggedIn }) {
  const [conPassVis, setConPassVis] = useState(false);
  const [passVis, setPassVis] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    Pass: "",
    confirmPass: "",
    remMe: false,
  });
  function checkPass() {
    document.querySelectorAll(".required").forEach((ele) => {
      if (formData[ele.name] === "") {
        ele.classList.add("notfilled");
      } else {
        ele.classList.remove("notfilled");
      }
    });

    if (
      formData.Pass === formData.confirmPass &&
      formData.Pass.length > 0 &&
      formData.confirmPass.length > 0
    ) {
      setisLoggedIn(true);
      navigate("/");
    } else if (formData.Pass.length > 0 || formData.confirmPass.length > 0) {
      document.querySelector(".passt").classList.add("notfilled");
    }
  }
  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    checkPass();
  }

  return (
    <div className="Form">
      <form onSubmit={submitHandler}>
        <h1 className="head">Log In</h1>

        <label>
          <h3>
            First Name <sup>*</sup>
          </h3>
          <input
            className="required"
            placeholder="First Name"
            value={formData.firstName}
            name="firstName"
            onChange={changeHandler}
            type="text"
          />
        </label>

        <label>
          <h3>Last Name</h3>
          <input
            placeholder="Last Name"
            value={formData.lastName}
            name="lastName"
            onChange={changeHandler}
            type="text"
          />
        </label>

        <label>
          <h3>
            Email <sup>*</sup>
          </h3>
          <input
            className="required"
            placeholder="Enter Email"
            value={formData.email}
            name="email"
            onChange={changeHandler}
            type="email"
          />
        </label>

        <div className="pass">
          <label>
            <h3>
              Password <sup>*</sup>
            </h3>
            <div className="pas1">
              <input
                minLength={8}
                className="required"
                placeholder="Enter Password"
                value={formData.Pass}
                name="Pass"
                onChange={changeHandler}
                type={passVis ? "text" : "password"}
              />
              <span
                onClick={() => {
                  setPassVis(!passVis);
                }}
              >
                {passVis ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </span>
            </div>
          </label>
          <label>
            <h3>
              Confirm Password <sup>*</sup>
            </h3>
            <div className="pas1">
              <input
                minLength={8}
                className="required"
                placeholder="Enter Password"
                value={formData.confirmPass}
                name="confirmPass"
                onChange={changeHandler}
                type={conPassVis ? "text" : "password"}
              />
              <span
                onClick={() => {
                  setConPassVis(!conPassVis);
                }}
              >
                {conPassVis ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </span>
            </div>
            <span className="passt">password do not match</span>
          </label>
        </div>
        <div className="check">
          <input
            name="remMe"
            value={formData.remMe}
            onChange={changeHandler}
            type="checkbox"
          />
          <span>Remember Me</span>
        </div>
        <button className="butn">Log In</button>
      </form>

      <div className="image">
        <img src="login.png" alt="login" />
      </div>
    </div>
  );
}

export default Login;
