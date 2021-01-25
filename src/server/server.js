const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { fetchAnalysisWithText } = require("./fetchAnalysis");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use(express.static("public"));

const API_KEY = process.env.API_KEY;

app.get("/text-fetch/:text", async (request, response) => {
  const encodedText = request.params.text;
  const fetchResponse = await fetchAnalysisWithText({
    text: encodedText,
    apiKey: API_KEY,
  });
  response.send(fetchResponse);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
  console.log("Press Ctrl+C to quit");
});
