import mongoose from "mongoose";
import { PlayerSchema } from "../models/playerModel";

const Player = mongoose.model("Player", PlayerSchema);

export const addNewPlayer = (req, res) => {
  let newPlayer = new Player(req.body);

  newPlayer.save((err, player) => {
    if (err) {
      res.status(500).send(err);
    }

    res.json({ player });
  });
};

export const getPlayers = (req, res) => {
  Player.find({}, (err, players) => {
    if (err) {
      res.status(500).send(err);
    }

    res.json({ results: players.length, players });
  });
};

export const getPlayer = (req, res) => {
  //   trycatch
  Player.findById(req.params.id, (err, player) => {
    if (err) {
      res.status(500).send(err);
    }

    res.json({ player });
  });
};
