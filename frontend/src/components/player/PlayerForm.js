import { useState } from "react";
import axios from "axios";

function PlayerForm() {
  const [player, setPlayer] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    team: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (player.firstName && player.lastName && player.email) {
      axios
        .post("http://localhost:5000/players", {
          firstName: player.firstName,
          lastName: player.lastName,
          email: player.email,
          phone: player.phone ? player.phone : undefined,
          team: player.team ? player.team : undefined,
        })
        .then((response) => {
          console.log(response.data.player);
        })
        .catch((error) => {
          console.log(error);
        });

      setPlayer({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        team: "",
      });
    }
  };

  return (
    <div className="row">
      <h3 className="center">Add a new player</h3>

      <form className="col s12" onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-field col s6">
            <input
              id="first_name"
              value={player.firstName}
              onChange={(e) =>
                setPlayer({ ...player, firstName: e.target.value })
              }
              type="text"
            />
            <label htmlFor="first_name">First Name *</label>
          </div>

          <div className="input-field col s6">
            <input
              id="last_name"
              value={player.lastName}
              onChange={(e) =>
                setPlayer({ ...player, lastName: e.target.value })
              }
              type="text"
            />
            <label htmlFor="last_name">Last Name *</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s6">
            <input
              id="phone"
              value={player.phone}
              onChange={(e) => setPlayer({ ...player, phone: e.target.value })}
              type="text"
            />
            <label htmlFor="phone">Phone</label>
          </div>

          <div className="input-field col s6">
            <input
              id="email"
              value={player.email}
              onChange={(e) => setPlayer({ ...player, email: e.target.value })}
              type="email"
            />
            <label htmlFor="email">Email *</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s6">
            <input
              id="team"
              value={player.team}
              onChange={(e) => setPlayer({ ...player, team: e.target.value })}
              type="text"
            />
            <label htmlFor="team">Team</label>
          </div>
        </div>

        <button className="btn waves-effect waves-light" type="submit">
          Add player
        </button>
      </form>
    </div>
  );
}

export default PlayerForm;
