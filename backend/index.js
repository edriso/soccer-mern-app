import express from "express";
import mongoose from "mongoose";
import soccerRoutes from "./routes/soccerRoutes";

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: false }));

// mongo connection
mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost/soccerDB");

soccerRoutes(app);

app.get("/", (req, res) => {
  res.send("Our Soccer application is running");
});

app.listen(PORT, () => console.log(`Soccer server is running on port ${PORT}`));
