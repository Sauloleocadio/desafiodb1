import React from "react";
import { useHistory } from "react-router-dom";
import "./styles.css";

// import { Container } from './styles';

function Ranking() {
  const history = useHistory();

  function handleBack() {
    history.push("/dashboard");
  }

  return (
    <div id="app">
      <div className="button_back">
        <button type="submit" onClick={handleBack}>
          Voltar!
        </button>
      </div>
      <div className="title">
        <h1>Ranking dos melhores!</h1>
      </div>
      <div className="container_table">
        <table id="table_ranking">
          <thead>
            <tr>
              <th>NickName</th>
              <th>Jogadas</th>
              <th>Tempo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Saulo
                Leocadioaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </td>
              <td>25</td>
              <td>15 minutos</td>
            </tr>
            <tr>
              <td>Berglunds snabbköp</td>
              <td>Christina Berglund</td>
              <td>Sweden</td>
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
            </tr>
            <tr>
              <td>Ernst Handel</td>
              <td>Roland Mendel</td>
              <td>Austria</td>
            </tr>
            <tr>
              <td>Island Trading</td>
              <td>Helen Bennett</td>
              <td>UK</td>
            </tr>
            <tr>
              <td>Königlich Essen</td>
              <td>Philip Cramer</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Laughing Bacchus Winecellars</td>
              <td>Yoshi Tannamuri</td>
              <td>Canada</td>
            </tr>
            <tr>
              <td>Magazzini Alimentari Riuniti</td>
              <td>Giovanni Rovelli</td>
              <td>Italy</td>
            </tr>
            <tr>
              <td>North/South</td>
              <td>Simon Crowther</td>
              <td>UK</td>
            </tr>
            <tr>
              <td>Paris spécialités</td>
              <td>Marie Bertrand</td>
              <td>France</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Ranking;
