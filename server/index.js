const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/", (req, res) => {
    res.json({ message: "Solve AWS elastic beanstalk 100.0 % of the requests are erroring with HTTP 4xx" });
});

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});