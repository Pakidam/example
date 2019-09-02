const db = require("./db");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

const PORT = process.env.PORT || 5001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(200).send(db);
});

app.get("/:Id", (req, res) => {
  const pageCount = Math.ceil(db.length / 10);
  let page = parseInt(req.params.Id);
  if (!page) {
    page = 1;
  }
  if (page > pageCount) {
    page = pageCount;
  }
  res.status(200).send(db.slice(page * 10 - 10, page * 10));
});

app.get("/station/:Id", (req, res) => {
  const Id = parseInt(req.params.Id);

  const station = db.find(element => element.StationID === Id);

  if (station) {
    res.status(200).json({
      Name: station.Station,
      Code: station.StationID
    });
  } else res.status(404).send("Resource is not available!");
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
