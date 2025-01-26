import React from "react";

const Card = ({ meal }) => {
  return (
    <li className="card-item">
      <h3>{meal.strMeal}</h3>
      <small>origin : {meal.strArea}</small>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <div className="card-description">
        <p className="text">{meal.strInstructions} </p>
        <a href="#" class="read-more">
          Lire la suite
        </a>
      </div>
    </li>
  );
};

export default Card;
