import PlayerList from "./player/PlayerList";
import PlayerSingle from "./player/PlayerSingle";
import PlayerForm from "./player/PlayerForm";
import "./App.css";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col s12">Menu</div>
      </div>

      <div className="row">
        <div className="col s12">
          <PlayerForm />
        </div>
      </div>

      <div className="row">
        <div className="col s3">
          <PlayerList />
        </div>
        <div className="col s9">
          <PlayerSingle />
        </div>
      </div>
    </div>
  );
}

export default App;
