const express = require("express");

const axios = require("axios");
const port = 5000;
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

router = express.Router();

app.get("/", (req, res) => {
  var bpm = req.query.bpm;
  var t = req.query.time;
  console.log(bpm);
  console.log(t);
  res.send("api is live");

  axios
    .post(
      "https://cyclofit-ee7cf-default-rtdb.asia-southeast1.firebasedatabase.app/HeartRate.json",
      {
        BPM: bpm,
        timestamp: t,
      }
    )
    .then((response) => {
      console.log(response);
    });
});

app.listen(port, () => {
  console.log("Server running on port " + port);
});
