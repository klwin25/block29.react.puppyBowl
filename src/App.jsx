import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import NavBar from "./components/NavBar";
import NewPlayerForm from "./components/NewPlayerForm";
import SinglePlayer from "./components/SinglePlayer";
import "./App.css";

function App() {
  const [players, setPlayers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredPlayers = players.filter(
    (player) =>
      player && player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <NavBar onSearch={handleSearch} />
      <Routes>
        <Route
          path="/"
          element={
            <AllPlayers players={filteredPlayers} setPlayers={setPlayers} />
          }
        />
        <Route path="/player/:id" element={<SinglePlayer />} />
        <Route
          path="/new-player"
          element={<NewPlayerForm setPlayers={setPlayers} />}
        />
      </Routes>
    </div>
  );
}

export default App;
