export const RatingUtils = (hotels, ratingNumber) => {
  if (ratingNumber === 1) {
    return hotels;
  }
  const data = hotels.filter(({ rating }) => rating >= ratingNumber);
  return data;
};
