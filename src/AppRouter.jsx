import { Navigate, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import { HomePage, SearchPage, PokemonPage } from "./page/index.js";
const AppRouter = () => {
  return (

    <Routes>
      <Route path="/" element={<Navigation/> }>
        <Route index element={<HomePage/>}/>
        <Route path="/is/:name" element={<PokemonPage />} />
        <Route path="search/:pokemon" element={<SearchPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRouter;
