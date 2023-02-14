import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Our Soccer application is running");
});

app.listen(PORT, () => console.log(`Soccer server is running on port ${PORT}`));
