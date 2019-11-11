// HTTP request library
import axios from 'axios';

export const getGifs = async (offset, query) => {
  const transformedQuery = query.replace(/[^A-Z0-9]+/ig, '+');
  try {
    const result = await axios.get(`https://api.giphy.com/v1/gifs/search?offset=${offset}&api_key=GZKGwdu6xlIM0iV58yFKJOFLqj0NLXFw&q=${transformedQuery}`);
    return result;
  } catch (error) {
    console.error(error);
  }
};
