import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countPoke, setCountPoke] = useState(9);

  useEffect(() => {
    const getPokemon = () => {
      fetch(url)
        .then((response) => response.json())
        .then((pokeList) => {
          const { results } = pokeList;
          return Promise.all(
            results.map((poke) =>
              fetch(poke.url)
                .then((response) => response.json())
                .then((poke) => ({
                  id: poke.id,
                  name: poke.name,
                  img: poke.sprites.other["official-artwork"].front_default,
                  types: poke.types.map((typeInfo) => typeInfo.type.name),
                  weight: poke.weight + "kg",
                  height: poke.height,
                  baseStat: poke.stats.map((stats) => stats.base_stat),
                  statName: poke.stats.map((stats) => stats.stat.name + " "),
                }))
            )
          );
        })
        .then((pokemon) => {
          setData(pokemon);
          setLoading(false);
        })
        .catch((error) => {
          setError(`Ocurrió un error: ${error}`);
          setLoading(false);
        });
    };

    getPokemon();
  }, [url]);

  const handleLoad = (pokeLength) => {
    setCountPoke((val) => Math.min(val + 9, pokeLength.length));
  };

  return { data, poke: data.slice(0, countPoke), error, loading, handleLoad };
};

export default useFetch;