import React, { useState, useEffect } from "react";
import "../css/landingpage.css";
import { saveCookie } from "../components/helpers/cookie";

export default function Login({ login, error }) {
  const [details, setDetails] = useState({ email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();

    login(details);
  };

  const LoginFetch = (e) => {
    e.preventDefault();
    let requestObject = {
      Email: details.email,
      Password: details.password,
    };
    debugger;
    fetch("https://localhost:44357/api/Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestObject),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="landingpage-body">
      <div className="Login-wrapper">
        <h1>Please Log In</h1>
        <form id="loginForm" onSubmit={(submitHandler, LoginFetch)}>
          <label>
            <p>Username</p>
            <input
              type="text"
              name="username"
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
              value={details.email}
            />
          </label>
          <label>
            <p>Password</p>
            <input
              type="password"
              name="password"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
            />
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
