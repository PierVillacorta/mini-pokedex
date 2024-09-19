import PokeContext from "./PokeContext";
import useFetch from "../useFetch";

const PokeProvider = ({ children }) => {
  const { data,poke , error , loading , handleLoad } = useFetch("https://pokeapi.co/api/v2/pokemon/?limit=151");
  return(
    <PokeContext.Provider value={{data ,poke, error, loading , handleLoad}}>
    {children}
    </PokeContext.Provider>
    )
  
};

export default PokeProvider;
