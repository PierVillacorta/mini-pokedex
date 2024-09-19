const LoadPoke = ({ handleLoad ,pokeLength }) => {
  return (
    <div className="box-load">
      <button onClick={ () => handleLoad(pokeLength)} className={"load-poke"}>
        <h4>Cargar mas</h4>
      </button>
    </div>
  );
};

export default LoadPoke;
