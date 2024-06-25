import axios from 'axios';
const url = "https://sw-api.starnavi.io/people/";

export const fetchData = async () => {
  try {
    const response = await axios(url)
    return response.data;
  } catch(error) {
    console.log(error.response);
  }
}