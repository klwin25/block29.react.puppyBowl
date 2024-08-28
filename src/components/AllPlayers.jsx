import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchPlayers } from "../main";

function AllPlayers({ players, setPlayers }) {
  const navigate = useNavigate();

  useEffect(() => {
    const getPlayers = async () => {
      const players = await fetchPlayers();
      setPlayers(players);
    };
    getPlayers();
  }, [setPlayers]);

  const handleDelete = async (id) => {
    await fetch(
      `https://fsa-puppy-bowl.herokuapp.com/api/2407-FTB-ET-WEB-FT/players/${id}`,
      {
        method: "DELETE",
      }
    );
    setPlayers((prevPlayers) =>
      prevPlayers.filter((player) => player.id !== id)
    );
  };

  return (
    <div className="allPlayersDiv">
      <h1>All Players</h1>
      {players.length === 0 ? (
        <p>No players available.</p>
      ) : (
        <div id="pupList">
          {players.map((player) => (
            <div key={player.id} className="player-card">
              <h4>{player.name}</h4>
              <img src={player.imageUrl} alt={player.name} />
              <button onClick={() => navigate(`/player/${player.id}`)}>
                See Details
              </button>
              <button onClick={() => handleDelete(player.id)}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AllPlayers;
