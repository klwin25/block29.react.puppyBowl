import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewPlayerForm({ setPlayers }) {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPlayer = { name, breed, imageUrl };
    const response = await fetch(
      "https://fsa-puppy-bowl.herokuapp.com/api/2407-FTB-ET-WEB-FT/players",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPlayer),
      }
    );
    const data = await response.json();
    setPlayers((prevPlayers) => [...prevPlayers, data.data.player]);
    navigate("/");
  };

  return (
    <div className="newPlayerFormDiv">
      <h1>Add New Player</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Breed:</label>
        <input
          type="text"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
          required
        />
        <label>Image URL:</label>
        <input
          type="url"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewPlayerForm;
