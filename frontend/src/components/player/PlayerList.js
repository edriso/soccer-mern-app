function PlayerList({ players, updateCurrentPlayer }) {
  return (
    <div className="players-list">
      <ul className="collection with-header">
        <li className="collection-header flow-text">Players</li>

        {players.map((player) => {
          return (
            <li
              className="collection-item"
              key={player._id}
              onClick={() => updateCurrentPlayer(player)}
            >
              {player.firstName} {player.lastName}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PlayerList;
