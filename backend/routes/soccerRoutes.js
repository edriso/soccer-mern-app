import {
  addNewPlayer,
  getPlayers,
  getPlayer,
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
    // GET player endpoint
    .get(getPlayer);
};

export default routes;
