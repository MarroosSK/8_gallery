import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
/*
export const fetchSearchedData = async (term: string) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?query=${term}&orientation=portrait&client_id=${API_KEY}&per_page=15&page=1&height=300`
  );
  return response.data.results;
};*/
export const fetchSearchedData = async (term: string) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?query=${term}&client_id=${API_KEY}&per_page=15&page=1`
  );
  console.log(response.data.results);
  return response.data.results;
};
