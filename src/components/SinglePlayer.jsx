import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SinglePlayer() {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPlayer = async () => {
      const response = await fetch(
        `https://fsa-puppy-bowl.herokuapp.com/api/2407-FTB-ET-WEB-FT/players/${id}`
      );
      const json = await response.json();
      setPlayer(json.data.player);
    };
    fetchPlayer();
  }, [id]);

  if (!player) return <p>Loading...</p>;

  return (
    <div className="singlePlayerDiv">
      <h1>{player.name}</h1>
      <p>ID: {player.id}</p>
      <p>Breed: {player.breed}</p>
      <img src={player.imageUrl} alt={player.name} />
      <button onClick={() => navigate("/")}>Back to all players</button>
    </div>
  );
}

export default SinglePlayer;
