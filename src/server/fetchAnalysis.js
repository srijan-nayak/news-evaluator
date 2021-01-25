const fetch = require("node-fetch");

const fetchAnalysisWithText = async (text, apiKey) => {
  const apiURL = `https://api.meaningcloud.com/sentiment-2.1`;
  const params = new URLSearchParams({
    key: apiKey,
    txt: text,
    lang: "auto",
  });
  try {
    const response = await fetch(apiURL, { method: "POST", body: params });
    const data = response.ok ? await response.json() : null;
    return { ok: response.ok, data: data };
  } catch (error) {
    console.log(error.message);
    return { ok: false, data: null };
  }
};

module.exports = {
  fetchAnalysisWithText,
};
