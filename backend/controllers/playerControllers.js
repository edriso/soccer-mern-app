import mongoose from "mongoose";
import { PlayerSchema } from "../models/playerModel";

const Player = mongoose.model("Player", PlayerSchema);

export const addNewPlayer = (req, res) => {
  let newPlayer = new Player(req.body);

  newPlayer.save((err, player) => {
    if (err) {
      return res.status(500).send(err);
    }

    res.status(201).json({ player });
  });
};

export const getPlayers = (req, res) => {
  Player.find({}, (err, players) => {
    if (err) {
      return res.status(500).send(err);
    }

    res.json({ results: players.length, players });
  });
};

export const getPlayer = (req, res) => {
  //   trycatch
  Player.findById(req.params.id, (err, player) => {
    if (err) {
      return res.status(500).send(err);
    }

    res.json({ player });
  });
};

export const updatePlayer = (req, res) => {
  //   trycatch
  Player.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    (err, player) => {
      if (err) {
        return res.status(500).send(err);
      }

      res.json({ player });
    }
  );
};

export const deletePlayer = (req, res) => {
  //   trycatch
  Player.findOneAndDelete({ _id: req.params.id }, (err, player) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (!player) {
      return res.status(404).json({ message: "Player not found" });
    }
    res.status(204).json({ message: "Successfully deleted player" });
  });
};
