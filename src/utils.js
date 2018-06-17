const padNumer = (num, size = 3) => {
  let s = num.toString();
  while (s.length < size) s = "0" + s;
  return s;
};

export { padNumer };
