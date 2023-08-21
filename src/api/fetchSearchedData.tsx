import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

// top10 (trendy
export const fetchTrendingImages = async () => {
  try {
    const response = await axios.get(
      `https://api.unsplash.com/photos?order_by=latest&full&per_page=10&client_id=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching trending images:", error);
  }
};
// based on input
export const fetchSearchedData = async (term: string) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?query=${term}&client_id=${API_KEY}&per_page=16&page=1`
  );
  console.log(response.data.results);
  return response.data.results;
};

// by ID
export const fetchPhotoDetails = async (photoId: string) => {
  const response = await axios.get(
    `https://api.unsplash.com/photos/${photoId}?client_id=${API_KEY}`
  );
  console.log(response.data);
  return response.data;
};
