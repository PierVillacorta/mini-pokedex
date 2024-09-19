import "./App.css";
import PokeProvider from "./context/PokeProvider";
import AppRouter from './AppRouter'
function App() {
  return (
    <PokeProvider>
      <div className="App">
      <AppRouter/>
      </div>
    </PokeProvider>
  );
}

export default App;
