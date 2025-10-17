export const HotelFilteredPrice = (hotels, pricerange) => {
  const filteredHotels = hotels.filter(
    ({ price }) => price >= pricerange[0] && price <= pricerange[1]
  );

  return filteredHotels;
};
