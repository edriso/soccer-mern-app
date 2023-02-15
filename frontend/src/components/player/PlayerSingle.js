function PlayerSingle({ player }) {
  return (
    <div className="row">
      <div className="col s12">
        {player.firstName && (
          <div className="card">
            <div className="card-image">
              <img src="soccer.jpg" alt={`${player.lastName || "Soccer"}`} />
              <span className="card-title">
                {player.firstName} {player.lastName}
              </span>
            </div>
            <div className="card-content">
              {player.phone && <p>Phone: {player.phone}</p>}
              {player.email && <p>Email: {player.email}</p>}
              {player.strength && <p>Strength: {player.strength}</p>}
              {player.speed && <p>Speed: {player.speed}</p>}
              {player.endurance && <p>Endurance: {player.endurance}</p>}
            </div>
            {player.team && (
              <div className="card-action">Team: {player.team}</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default PlayerSingle;
