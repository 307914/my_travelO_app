export const nameregex = (name) => {
  const regex = /^[a-z]+$/i;
  return regex.test(name);
};
