import axios from "axios";

const API_KEY = 'be9ae4b019msh07737993feb38cep184dc7jsn3f0d4711fd85';
const API_HOST = 'sky-scrapper.p.rapidapi.com';

export const searchFlights = async () => {
  const options = {
    method: 'GET',
    url: 'https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlightEverywhere',
    params: {
      originEntityId: '95673320',
      cabinClass: 'economy',
      journeyType: 'one_way',
      currency: 'USD'
    },
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': API_HOST
    }
  };
  
  try {
    const response = await axios.request(options);
    console.log(response.data.results);
  } catch (error) {
    console.error(error);
  }
};
