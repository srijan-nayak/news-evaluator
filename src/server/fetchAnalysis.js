const fetch = require("node-fetch");

const fetchData = async (apiURL, params) => {
  try {
    const response = await fetch(apiURL, { method: "POST", body: params });
    const data = response.ok ? await response.json() : null;
    let ok = false;
    if (data) {
      ok = data.status.code === "0";
    }
    return { ok, data };
  } catch (error) {
    console.log(error.message);
    return { ok: false, data: null };
  }
};

const fetchAnalysisWithText = async (text, apiKey) => {
  const apiURL = `https://api.meaningcloud.com/sentiment-2.1`;
  const params = new URLSearchParams({
    key: apiKey,
    txt: text,
    lang: "auto",
  });
  return fetchData(apiURL, params);
};

const fetchAnalysisWithUrl = async (url, apiKey) => {
  const apiURL = `https://api.meaningcloud.com/sentiment-2.1`;
  const params = new URLSearchParams({
    key: apiKey,
    url: url,
    lang: "auto",
  });
  return fetchData(apiURL, params);
};

module.exports = {
  fetchAnalysisWithText,
  fetchAnalysisWithUrl,
};
