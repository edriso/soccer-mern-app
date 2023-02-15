function PlayerList({ players, updateCurrentPlayer }) {
  return (
    <div>
      <ul className="collection with-header">
        <li className="collection-header">Players</li>

        {players.map((player) => {
          return (
            <a
              href="#"
              key={player._id}
              className="collection-item"
              onClick={() => updateCurrentPlayer(player)}
            >
              {player.firstName} {player.lastName}
            </a>
          );
        })}
      </ul>
    </div>
  );
}

export default PlayerList;
