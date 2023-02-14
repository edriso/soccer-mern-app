import {
  addNewPlayer,
  getPlayers,
  getPlayer,
  updatePlayer,
  deletePlayer,
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
    .get(getPlayer)
    .patch(updatePlayer)
    .delete(deletePlayer);
};

export default routes;
