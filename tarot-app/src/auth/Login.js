import React, { useState } from "react";
import firebase from "./../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const register = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        resetInput();
      })
      .catch((err) => {
        setError(err);
        console.error(err);
      });
  };

  const login = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        resetInput();
      })
      .catch((err) => {
        setError(err);
        console.error(err);
      });
  };

  const logOut = () => {
    firebase.auth().signOut();
  };

  const resetInput = () => {
    setEmail("");
    setPassword("");
    setError("");
  };

  return (
    <div>
      <h1>Login</h1>
      <div className="inputBox">
        <h3>Login/Register</h3>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button onClick={register}>Register</button>
        <button onClick={login}>Login</button>
        <button onClick={logOut}>Log Out</button>
        <br />
        <span style={{ color: "red" }}>
          {error.code ? error.code : ""} {error.message ? error.message : ""}
        </span>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Login;
