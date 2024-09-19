import { useContext, useState } from "react";
import PokeContext from "../context/PokeContext";
import { useParams } from "react-router-dom";
import PokeCard from "../components/PokeCard";
import LoadPoke from "../components/LoadPoke";

const SearchPage = () => {
  const [pokeCurrent, setPokeCurrent] = useState(9);

  const { data,loading } = useContext(PokeContext);
  const { pokemon } = useParams();
  const numberValue = parseInt(pokemon).toString();
  const pokeSearch = data.filter(
    (poke) =>
      poke.name.includes(pokemon) || poke.id.toString().includes(numberValue)
  );
  const load = (indexPoke) => {
    setPokeCurrent((val) => Math.min(val + 9, indexPoke.length));
  };
  return (
    <div className="main-container">
      {loading ? (
        <div className="loading-container">
          <l-bouncy size="45" speed="1.75" color="#c01111"></l-bouncy>
        </div>
      ) : (
        <>
          <ul className="card-container">
            {pokeSearch.slice(0, pokeCurrent).map((pokemones) => (
              <PokeCard pokemon={pokemones} key={pokemones.id} />
            ))}
          </ul>
          <LoadPoke handleLoad={load} pokeLength={pokeSearch} />
        </>
      )}
    </div>
  );
};

export default SearchPage;
