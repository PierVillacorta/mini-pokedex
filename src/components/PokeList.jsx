import { useContext } from "react";
import "../styles/PokeList.css";
import PokeCard from "./PokeCard";
import LoadPoke from "./LoadPoke";
import PokeContext from "../context/PokeContext";

const PokeList = () => {
  const { data, poke, error, loading, handleLoad } = useContext(PokeContext);

  return (
    <>
      {loading ? (
        <div className="loading-container">
          <l-bouncy size="45" speed="1.75" color="#c01111"></l-bouncy>
        </div>
      ) : 
      error ? (
        <h1>{error}</h1>
      ) : (
        <>
          <ul className="card-container">
            {poke.map((pokemon) => (
              <PokeCard pokemon={pokemon} key={pokemon.id} />
            ))}
          </ul>
          <LoadPoke handleLoad={handleLoad} pokeLength={data} />
        </>
      )}
    </>
  );
};

export default PokeList;
