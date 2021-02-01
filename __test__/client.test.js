import toggleDisabledInputs from "../src/client/js/toggleDisabledInput.js";
import getActiveInput from "../src/client/js/getActiveInput";
import hasValidValue from "../src/client/js/hasValidValue";
import fetchData from "../src/client/js/fetchData";
import updateOutputCard from "../src/client/js/updateOutputCard";
import handleError from "../src/client/js/handleError";

describe("Check if all required client functions are defined", () => {
  test("Test if toggleDisabledInputs is defined", () => {
    expect(toggleDisabledInputs).toBeDefined();
  });

  test("Test if getActiveInput is defined", () => {
    expect(getActiveInput).toBeDefined();
  });

  test("Test if hasValidValue is defined", () => {
    expect(hasValidValue).toBeDefined();
  });

  test("Test if fetchData is defined", () => {
    expect(fetchData).toBeDefined();
  });

  test("Test if updateOutputCard  is defined", () => {
    expect(updateOutputCard).toBeDefined();
  });

  test("Test if handleError  is defined", () => {
    expect(handleError).toBeDefined();
  });
});
