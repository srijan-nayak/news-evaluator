require("dotenv").config();
const { fetchAnalysisWithText } = require("../src/server/fetchAnalysis");

const API_KEY = process.env.API_KEY;
const text = `New Delhi:

The deaths of six healthcare workers, who were inoculated, are not related to the Covid vaccinations, the Union Health Ministry said on Saturday.

"At least six deaths have been reported so far. In the last 24 hours, one person, 56, who was a resident of Gurugram, Haryana has died. The post-mortem examination confirms that cardio-pulmonary disease was the reason for her death and it was not related to vaccination. None of these deaths have been causally linked with COVID vaccination," Manohar Agnani, additional health secretary, said on Saturday.

Mr Agnani also said that 11 people have been hospitalised so far.

"0.0007 per cent people have recorded hospitalisation against vaccinations. In the last 24 hours, one person has been hospitalised at a Government Hospital in Guntur, Andhra Pradesh who was vaccinated on January 20," he said.

The cumulative number of healthcare workers vaccinated against COVID-19 has crossed 15 lakhs on the eighth day of vaccination.

15,37,190 beneficiaries on Saturday were vaccinated through 27,776 sessions till 6 PM, as per the provisional report of the government.`;

test("Fetch sentiment analysis with valid api key and text input", async () => {
  const { data, ok } = await fetchAnalysisWithText(text, API_KEY);

  ok ? expect(data.status.code).toEqual("0") : expect(data).toBeNull();
});
