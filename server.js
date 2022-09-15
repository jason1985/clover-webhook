const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());

app.post("/webhook", (req, res) => {
  console.log(req.body);
  res.json({});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Connection established and running on port ${PORT}`)
);
