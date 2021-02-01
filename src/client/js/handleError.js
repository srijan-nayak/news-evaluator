const handleError = (data) => {
  console.log(data);
  if (!data) {
    alert("ERROR: Can not connect to MeaningCloud API");
  } else {
    const errorCode = data.status.code;
    if (/^10\d$/.test(errorCode)) {
      alert("ERROR: Can not fetch analysis with current license key");
    } else {
      alert(
        "ERROR: Can not fetch analysis from MeaningCloud with the given input"
      );
    }
  }
};

export default handleError;
