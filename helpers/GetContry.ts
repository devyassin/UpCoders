import axios from "axios";

export const fetchCountryNames = async () => {
  try {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    const countryNames = response.data.map(
      (country: any) => country.name.common
    );
    return countryNames;
  } catch (error) {
    throw error;
  }
};
