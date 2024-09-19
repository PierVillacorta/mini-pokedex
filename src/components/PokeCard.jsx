import React from "react";
import "../styles/PokeCard.css";
import { Link } from "react-router-dom";
const PokeCard = ({pokemon}) => {
  return (
    <Link to={`/is/${pokemon.name}`} className="poke-card">
      <li className="poke-list">
        <p className="id">N.º {pokemon.id}</p>
        <img className="poke-img" src={pokemon.img} alt={pokemon.name} />
        <div className="poke-info">
          <h1>{pokemon.name}</h1>
          <div className="type-container">
            {Array.isArray(pokemon.types) &&
              pokemon.types.map((type, index) => (
                <span key={index} className={`box ${type}`}>
                  <p className="type-text">{type}</p>
                </span>
              ))}
          </div>
        </div>
      </li>
    </Link>
  );
};

export default PokeCard;
