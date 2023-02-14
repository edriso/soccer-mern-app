import {
  addNewPlayer,
  getPlayers,
  getPlayer,
  updatePlayer,
} from "../controllers/playerControllers";

const routes = (app) => {
  app
    .route("/players")
    // GET all players endpoint
    .get(getPlayers)

    // POST endpoint
    .post(addNewPlayer);

  app
    .route("/players/:id")
    // GET a player endpoint
    .get(getPlayer)

    // update a player endpoint
    .patch(updatePlayer);
};

export default routes;
