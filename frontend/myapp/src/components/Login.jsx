import React from "react";
import axios from "axios";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";

const Login = () => {
  //   const [email, setEmail] = useState({});
  //   const [password, setPassword] = useState({});
  const navigate = useNavigate();

  const [values, setValues] = React.useState({
    email: "",
    password: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:8081/login", values)
      .then((res) => {
        console.log(res);
        // navigate('/home');
        if (res.data === "Success") {
          navigate("/");
        } else {
          alert("No record existed!..");
        }
      })
      .catch((err) => console.log(err));
  }

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
    console.log("done");
  };

  return (
    <div className="form-div">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="line"></div>
        <label htmlFor="">Email : </label>
        <input
          name="email"
          type="email"
          placeholder="abc@gmail.com"
          onChange={handleInput}
        />
        <br />
        <br />
        <label htmlFor="">Password : </label>
        <input
          name="password"
          type="password"
          placeholder="*******"
          onChange={handleInput}
        />
        <br />
        <br />
        <div className="submit-btn">
          <button type="submit">Login</button>
        </div>

        <div className="already-reg-sign">
          <span>
            Do you haven't account ?{" "}
            <Link to="/register">
              <button>Click here</button>
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
