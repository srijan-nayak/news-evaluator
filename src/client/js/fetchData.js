const fetchData = async (inputElement) => {
  const inputType = inputElement.id === "news-url" ? "url" : "text";
  const encodedValue = encodeURIComponent(inputElement.value);
  const apiEndPoint = inputType === "url" ? "url-fetch" : "text-fetch";
  const apiPath = `http://localhost:3000/${apiEndPoint}/${encodedValue}`;
  const response = await fetch(apiPath);
  return response.json();
};

export default fetchData;
