import { useState, useEffect } from "react";
import axios from "axios";
import PlayerList from "./player/PlayerList";
import PlayerSingle from "./player/PlayerSingle";
import PlayerForm from "./player/PlayerForm";
import "./App.css";

function App() {
  const [players, setPlayers] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState({});

  const updateCurrentPlayer = (item) => {
    setCurrentPlayer(item);
  };

  useEffect(() => {
    const url = "http://localhost:5000/players";

    axios
      .get(url)
      .then((response) => {
        setPlayers(response.data.players);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <nav className="col s12 deep-purple lighten-2">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">
              Soccer Management
            </a>
          </div>
        </nav>
      </div>

      <div className="row">
        <div className="col s3">
          <PlayerList
            players={players}
            updateCurrentPlayer={updateCurrentPlayer}
          />
        </div>
        <div className="col s9">
          <PlayerSingle player={currentPlayer} />
        </div>
      </div>

      <div className="row">
        <div className="col s12">
          <PlayerForm />
        </div>
      </div>
    </div>
  );
}

export default App;
