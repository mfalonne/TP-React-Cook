import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

const App = () => {
  const [inputSearch, setInputsearch] = useState("");
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=" + inputSearch
      )
      .then((result) => {
        setData(result.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => getData(), [inputSearch]);
  return (
    <div>
      <h1>React Cook</h1>
      <input
        type="text"
        placeholder="Tapez le nom d'un aliment (en anglais)"
        onChange={(e) => setInputsearch(e.target.value)}
      />
      <div className="card-container">
        <ul className="card-list">
          {data && data.length > 0 ? (
            data.map((meal) => <Card key={meal.idMeal} meal={meal} />)
          ) : (
            <p>Element introuvable</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default App;
