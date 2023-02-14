import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = 3000;

app.use(express.json());

// mongo connection
mongoose.Promise = global.Promise;
mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost/soccerDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", (req, res) => {
  res.send("Our Soccer application is running");
});

app.listen(PORT, () => console.log(`Soccer server is running on port ${PORT}`));
