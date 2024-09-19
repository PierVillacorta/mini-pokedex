import "../styles/Navigation.css";
import PokedexLogo from "../assets/Pokedex_logo.png";
import { IoSearch } from "react-icons/io5";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
const Navigation = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setInputValue(value);
  };
  const handleSumbmit = (e) => {
    e.preventDefault();
    const url = `search/${inputValue.trim()}`
    console.log(url.toLowerCase());
    
    navigate(url)
  };

  return (
    <header className="nav-container">
      <form className="nav" onSubmit={handleSumbmit}>
        <Link to="/">
          <img className="logo" src={PokedexLogo} alt="Pokedex Logo" />
        </Link>
        <div className="browser-container">
          <input
            className="search"
            type="text"
            placeholder="Busca un pokemon"
            onChange={handleChange}
          />
          <button className="search-icon" aria-label="Buscar">
            <IoSearch />
          </button>
        </div>
      </form>
      <Outlet />
    </header>
  );
};

export default Navigation;
