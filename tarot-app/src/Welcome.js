import React, { useContext } from "react";
import { AuthContext } from "./auth/Auth";

function Welcome() {
  const { loading, currentUser } = useContext(AuthContext);
  const currentUserEmail = currentUser ? currentUser.email : "";

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>{`Welcome ${currentUserEmail}`}</h1>
    </div>
  );
}

export default Welcome;
