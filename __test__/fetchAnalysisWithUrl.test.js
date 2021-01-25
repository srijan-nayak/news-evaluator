require("dotenv").config();
const { fetchAnalysisWithUrl } = require("../src/server/fetchAnalysis");

const API_KEY = process.env.API_KEY;
const url =
  "https://www.ndtv.com/india-news/deaths-of-six-healthcare-workers-not-linked-to-covid-vaccination-health-ministry-2357187";

test("Fetch sentiment analysis with valid api key and URL input", async () => {
  const { data, ok } = await fetchAnalysisWithUrl(url, API_KEY);

  ok ? expect(data.status.code).toEqual("0") : expect(data).toBeNull();
});
