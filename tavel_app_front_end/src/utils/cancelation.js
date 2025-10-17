export const CancelFiltered = (hotels, iscancelable) => {
  const data = hotels.filter(
    ({ isCancelable }) => isCancelable === iscancelable
  );

  return data;
};
