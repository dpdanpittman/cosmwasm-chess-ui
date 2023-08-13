import { NavLink, Outlet } from "react-router-dom";

import { Profile } from "./chess/Profile";
import { CosmWasmChess } from "./chess/CosmWasmChess";
import { useCosmWasm } from "./chess/useCosmWasm";

// import { CHAIN_INFO, CONTRACT } from "./config/testnet";
import { CHAIN_INFO, CONTRACT } from "./config/juno";
import { Address } from "./Address";

import "./App.css";

function App() {
  const cosmWasm = useCosmWasm(CHAIN_INFO);
  const contract = new CosmWasmChess(cosmWasm, CONTRACT);

  const navClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "active" : "";

  return (
    <div className="App">
      <NavLink className={navClass} to="/">
        <h1>Cosmic Chess</h1>
      </NavLink>

      <nav>
        <NavLink className={navClass} to="challenges/">
          Challenges
        </NavLink>
        <NavLink className={navClass} to="games/">
          Games
        </NavLink>
        <Profile cosmWasm={cosmWasm} />
      </nav>

      <main>
        <Outlet context={contract} />
      </main>
    </div>
  );
}

export default App;
