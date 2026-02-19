const express = require("express");
const cors = require("cors");

const cardRoutes = require("./api/cards");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/cards", cardRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Playing Card REST API is running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
