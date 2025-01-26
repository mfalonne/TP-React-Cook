import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

const App = () => {
  const [inputSearch, setInputSearch] = useState("");
  const [data, setData] = useState([]); // Initialisation avec un tableau vide
  const [loading, setLoading] = useState(false); // État de chargement

  const getData = () => {
    setLoading(true); // Mettre l'état de chargement à vrai
    axios
      .get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=" + inputSearch
      )
      .then((result) => {
        setData(result.data.meals || []); // Gérer le cas où `meals` est null
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false); // Mettre l'état de chargement à faux après la récupération des données
      });
  };

  useEffect(() => getData(), [inputSearch]);

  return (
    <div>
      <h1>React Cook</h1>
      <input
        type="text"
        placeholder="Tapez le nom d'un aliment (en anglais)"
        onChange={(e) => setInputSearch(e.target.value)}
      />
      <div className="card-container">
        <ul className="card-list">
          {data && data.length > 0 ? (
            data.map((meal) => <Card key={meal.idMeal} meal={meal} />)
          ) : (
            <p>{loading ? "Chargement..." : "Élément introuvable"}</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default App;
