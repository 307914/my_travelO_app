export const passwordregex = (password) => {
  const regex = /^(?=.*\d)(?=.*[@#$*!&%])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return regex.test(password);
};
