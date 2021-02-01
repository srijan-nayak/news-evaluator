const hasValidValue = (inputElement) => {
  const value = inputElement.value;
  const inputType = inputElement.id === "news-url" ? "url" : "text";
  const pattern = inputType === "url" ? /^(https?|ftp):\/\// : /^(?!\s*$).+/;
  const isValid = pattern.test(value);
  isValid
    ? inputElement.classList.remove("invalid")
    : inputElement.classList.add("invalid");
  return isValid;
};

export default hasValidValue;
