import React from "react";
import GetFirebase from "./GetFirebase";
import { AuthProvider } from "./auth/Auth";
import Login from "./auth/Login";
import Welcome from "./Welcome";

import "./App.css";

function App() {
  return (
    <>
      <AuthProvider>
        <Welcome />
        <Login />
        <GetFirebase />
      </AuthProvider>
    </>
  );
}

export default App;
