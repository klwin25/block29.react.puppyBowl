import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

export const fetchPlayers = async () => {
  const response = await fetch(
    "https://fsa-puppy-bowl.herokuapp.com/api/2407-FTB-ET-WEB-FT/players"
  );
  const json = await response.json();
  return json.data.players;
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
