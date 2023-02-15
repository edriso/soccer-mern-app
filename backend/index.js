import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import soccerRoutes from "./routes/soccerRoutes";

const app = express();
const PORT = 5000;

// middlewares
app.use(express.json()); // html form worked with this
app.use(express.urlencoded({ extended: false })); // postman worked with this
// CORS setup
app.use(cors());

// mongo connection
mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost/soccerDB");

soccerRoutes(app);

app.get("/", (req, res) => {
  res.send("Our Soccer application is running");
});

app.listen(PORT, () => console.log(`Soccer server is running on port ${PORT}`));
