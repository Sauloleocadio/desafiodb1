import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./styles.css";

import logo from "../../assets/logo.png";
import themeone from "../../assets/themeone.png";
import themetwo from "../../assets/themetwo.png";
import themethree from "../../assets/themethree.png";
import themefour from "../../assets/themefour.png";

function Login() {
  const history = useHistory();
  const [nickname, setNickname] = useState("");
  const [mytheme, setMytheme] = useState("");
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);

  function handleFavorite(value, theme) {
    switch (theme) {
      case "one":
        setOne(value);
        setTwo(false);
        setThree(false);
        setFour(false);
        setMytheme(theme);
        break;
      case "two":
        setOne(false);
        setTwo(value);
        setThree(false);
        setFour(false);
        setMytheme(theme);
        break;
      case "three":
        setOne(false);
        setTwo(false);
        setThree(value);
        setFour(false);
        setMytheme(theme);
        break;
      case "four":
        setOne(false);
        setTwo(false);
        setThree(false);
        setFour(value);
        setMytheme(theme);
        break;
      default:
        alert(`Nenhum tema escolhido${theme}.`);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleInputChange(e) {
    setNickname(e.target.value);
  }

  function handlePlayTheGame() {
    if (nickname === "" || mytheme === "") {
      alert("Digite seu nickname e o seu tema para jogar!");
      return false;
    }

    localStorage.setItem("@my-nickename", nickname);
    localStorage.setItem("@my-theme", mytheme);
    history.push("/dashboard");
  }

  return (
    <div id="app">
      <div className="container_image">
        <img className="image" alt="Logo" src={logo} />
      </div>
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <h1 className="nick_name">Qual seu nickname ? </h1>
          <input
            onChange={handleInputChange}
            value={nickname}
            className="input_name"
            placeholder="Digite seu nickname"
          />
          <h1 className="nick_name">Qual seu tema preferido? </h1>
          <div className="favorite_topic">
            <button
              type="submit"
              style={{
                backgroundColor: `${one ? "#016795" : "#FFFFFF"}`,
              }}
              className="button_favorite"
              onClick={() => handleFavorite(true, "one")}
            >
              <img className="image_button" alt="Logo" src={themeone} />
            </button>
            <button
              type="submit"
              style={{
                backgroundColor: `${two ? "#016795" : "#FFFFFF"}`,
              }}
              className="button_favorite"
              onClick={() => handleFavorite(true, "two")}
            >
              <img className="image_button" alt="Logo" src={themetwo} />
            </button>

            <button
              type="submit"
              style={{
                backgroundColor: `${three ? "#016795" : "#FFFFFF"}`,
              }}
              className="button_favorite"
              onClick={() => handleFavorite(true, "three")}
            >
              <img className="image_button" alt="Logo" src={themethree} />
            </button>

            <button
              type="submit"
              style={{
                backgroundColor: `${four ? "#016795" : "#FFFFFF"}`,
              }}
              className="button_favorite"
              onClick={() => handleFavorite(true, "four")}
            >
              <img className="image_button" alt="Logo" src={themefour} />
            </button>
          </div>
          <button
            type="submit"
            className="button_play"
            onClick={handlePlayTheGame}
          >
            JOGAR!
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
