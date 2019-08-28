import React, { useState, useEffect } from "react";
import "./RegisterPage.css";

function RegisterPage(props) {
  const [registerObj, setRegister] = useState({
    username: "",
    password: "",
    email: ""
  });

  useEffect(() => {
    // console.dir(registerObj);
  });

  return (
    <div className="page">
      <div className="wrapper">
        <form
          onSubmit={e => {
            validateRegistration(e, registerObj);
          }}
        >
          <input
            type="email"
            placeholder="email"
            required
            onBlur={e => {
              setRegister({ ...registerObj, email: e.target.value });
            }}
          />
          <input
            type="password"
            placeholder="password"
            required
            onBlur={e => {
              setRegister({ ...registerObj, password: e.target.value });
            }}
          />

          <input type="submit" value="Register" />
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;

function validateRegistration(e, registerObj) {
  e.preventDefault();
  console.dir(registerObj);

  fetch('http://localhost:8000/auth/register', {
    method: "POST",
    body: JSON.stringify(registerObj),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(response => console.dir(response))
    .catch(error => console.error("Error:", error));
}
