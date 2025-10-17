export const PropertyTypeData = (hotels, propertytype) => {
  if (propertytype === '') {
    return hotels;
  }
  const data = hotels.filter(
    ({ propertyType }) => propertyType === propertytype
  );

  return data;
};
