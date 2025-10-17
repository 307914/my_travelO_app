export const HotelBedsAndRooms = (
  hotels,
  noOfBathrooms,
  noOfBedrooms,
  noOfBeds
) => {
  if (noOfBathrooms === 'Any' || noOfBedrooms === 'Any' || noOfBeds === 'Any') {
    return hotels;
  }
  const filteredBedsData = hotels.filter(
    ({ numberOfBathrooms, numberOfBedrooms, numberOfBeds }) =>
      numberOfBathrooms === noOfBathrooms ||
      numberOfBedrooms === noOfBedrooms ||
      numberOfBeds === noOfBeds
  );

  return filteredBedsData;
};
