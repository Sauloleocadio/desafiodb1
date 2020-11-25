import React, { useState, useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";

function Dashboard() {
  const history = useHistory();
  const [nickname, setNickname] = useState("");

  useLayoutEffect(() => {
    const name = localStorage.getItem("@my-nickename");
    if (name === null) {
      history.push("/");
    }
    setNickname(name);
  }, [history]);

  return (
    <div id="app">
      <h1>Hello, {nickname}</h1>
    </div>
  );
}

export default Dashboard;
