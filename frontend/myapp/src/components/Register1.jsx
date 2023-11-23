import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// import "./Validation";

import {Validation} from "./style.css";

const Register = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = React.useState({});
  const navigate = useNavigate();

  function validation(email, password) {
    let error = {};
    const email_pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;

    if (email === "") {
      error.email = "Name should not be empty!..";
    } else if (!email_pattern.test(email)) {
      error.email = "E-mail didn't match";
    } else {
      error.email = "";
    }

    if (password === "") {
      error.password = "Password should not be empty!..";
    } else if (!password_pattern.test(password)) {
      error.password = "Password didn't match";
    } else {
      error.password = "";
    }

    return error;
  }

  function handleSubmit(event) {
    event.preventDefault();
    setErrors(validation(email, password));
    axios.post("http://localhost:8081/register", (name, email, password))
    .then(res => {
      // console.log(res)
      navigate('/login');
    })
    .catch(err => console.log(err));
  }

  return (
    <div className="form-div">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div className="line"></div>
        <label htmlFor="">name : </label>
        <input
          type="text"
          placeholder="A.B.C. Dfhij"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <br />
        <label htmlFor="">Email : </label>
        <input
          type="email"
          placeholder="abc@gmail.com"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        {errors.email && <span className="err-msg">{errors.email}</span>}
        <br />
        <br />
        <label htmlFor="">Password : </label>
        <input
          type="password"
          placeholder="*******"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {errors.password && <span className="err-msg">{errors.password}</span>}
        <br />
        <br />
        <div className="submit-btn">
          <button type="submit">Sign Up</button>
        </div>

        <div className="already-reg-sign">
          <span>
            Are you already registered?{" "}
            <Link to="/login">
              <button>Click here</button>
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Register;
