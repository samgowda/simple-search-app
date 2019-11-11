export const transformGifs = data => {
  return data.map(gif => {
    return {
      id: gif.id,
      isFavorite: false,
    };
  });
};
