import { useContext } from "react";
import { useParams } from "react-router-dom";
import PokeContext from "../context/PokeContext";
import "../styles/PokemonPage.css";

const PokemonPage = () => {
  const { name } = useParams();
  const { data, loading } = useContext(PokeContext);

  const pokemon = data.find((item) => item.name === name);

  return (
    <div className="main-container">
      {loading ? (
        <div className="loading-container">
          <l-bouncy size="45" speed="1.75" color="#c01111"></l-bouncy>
        </div>
      ) : (
        pokemon ? (
          <div className="page-content">
            <section className="info-text">
              <h1>{pokemon.name.toUpperCase()}</h1>
              <p>#{pokemon.id}</p>
            </section>
            <img src={pokemon.img} alt={pokemon.name} />
            <section className="info-stats">
              <p><strong>POKEMON STATS:</strong></p>
              <ul className="box-bar">
                {pokemon.baseStat.map((stat, index) => (
                  <li key={index} className="row-bar">
                    <span className="bar" style={{ height: `${stat * 1.5}px` }}></span>
                    <span className="stat-name">{pokemon.statName[index].toUpperCase().replace(/[-]/, ' ')}</span>
                  </li>
                ))}
              </ul>
            </section>
            <section className="info-type">
              {pokemon.types.map((type, index) => (
                <span key={index} className={`box ${type}`}>
                  <p>{type}</p> 
                </span>
              ))}
            </section>
            <section className="info">
              <p><strong>Weight:</strong> {pokemon.weight}</p>
              <p><strong>Height:</strong> {pokemon.height}</p>
            </section>
          </div>
        ) : (
          <div>Pokémon no encontrado</div>
        )
      )}
    </div>
  );
};

export default PokemonPage;