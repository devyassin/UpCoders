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


export const fetchCountryFlagByName = async (name:string) => {
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
    const countryFlag= response.data[0]?.flags?.png;
    return countryFlag;
  } catch (error) {
    throw error;
  }
};