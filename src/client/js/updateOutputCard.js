const updateOutputCard = (data) => {
  const {
    score_tag,
    agreement,
    subjectivity,
    confidence,
    irony
  } = data.data;

  const polarity = {
    NEU: "NEUTRAL",
    P: "POSITIVE",
    N: "NEGATIVE",
    NONE: "WITHOUT SENTIMENT",
    "P+": "STRONGLY POSITIVE",
    "N+": "STRONGLY NEGATIVE",
  };

  const ironicalness = {
    IRONIC: "IRONIC",
    NONIRONIC: "NOT IRONIC",
  };

  document.querySelector("#score_tag").innerText = polarity[score_tag].toLowerCase();
  document.querySelector("#agreement").innerText = agreement.toLowerCase();
  document.querySelector("#subjectivity").innerText = subjectivity.toLowerCase();
  document.querySelector("#confidence").innerText = confidence;
  document.querySelector("#irony").innerText = ironicalness[irony].toLowerCase();
};

export default updateOutputCard;
