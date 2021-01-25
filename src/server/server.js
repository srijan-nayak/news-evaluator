require("dotenv").config();
const API_KEY = process.env.API_KEY;

const express = require("express");
const cors = require("cors");

const {
  fetchAnalysisWithText,
  fetchAnalysisWithUrl,
} = require("./fetchAnalysis");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use(express.static("public"));

app.get("/text-fetch/:text", async (request, response) => {
  const text = request.params.text;
  const fetchResponse = await fetchAnalysisWithText(text, API_KEY);
  response.send(fetchResponse);
});

app.get("/url-fetch/:url", async (request, response) => {
  const url = request.params.url;
  const fetchResponse = await fetchAnalysisWithUrl(url, API_KEY);
  response.send(fetchResponse);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
  console.log("Press Ctrl+C to quit");
});
