import Sidebar from "./components/sidebar";
import Login from "./components/login";
import React, { useState } from "react";
import Profileinfo from "./components/profileInfo";

function App() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  //här hämtar vi feedbacken från backend om vi kommer in eller inte.
  const adminUser = {
    email: "test@test.com",
    password: "qwe123",
  };

  const login = (details) => {
    console.log(details);
    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      setUser({
        email: details.email,
        password: details.password,
      });
      console.log("LoggedIn");
    } else {
      console.log("details do not match");
    }
  };

  const Logout = () => {
    console.log("Logout");
  };

  return (
    <div>
      {user.email != "" ? (
        <main>
          {/* <div className="total-sidebar-container"> */}
          <Profileinfo></Profileinfo>
          <Sidebar></Sidebar>
          {/* </div> */}
        </main>
      ) : (
        <Login login={login} error={error}></Login>
      )}
    </div>
  );
}
export default App;
