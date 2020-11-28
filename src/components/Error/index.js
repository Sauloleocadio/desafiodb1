import React from "react";
import { useLocation } from "react-router-dom";

import error from "../../assets/erro-404.png";
import "./styles.css";

function Error() {
  let location = useLocation();
  return (
    <div id="app">
      <div className="container_image">
        <img className="image" alt="imagem_erro" src={error} />
      </div>
      <h3 id="error">Server Error 404!</h3>
      <h3 id="error">
        Página não existente <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

export default Error;
