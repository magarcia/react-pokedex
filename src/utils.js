const padNumer = (num, size = 3) => {
  let s = num.toString();
  while (s.length < size) s = "0" + s;
  return s;
};

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

const deepEqual = (a, b) => {
  if (
    typeof a === "object" &&
    a != null &&
    (typeof b === "object" && b != null)
  ) {
    let count = [0, 0];
    for (let _ in a) count[0]++; //eslint-disable-line no-unused-vars
    for (let _ in b) count[1]++; //eslint-disable-line no-unused-vars
    if (count[0] - count[1] !== 0) {
      return false;
    }
    for (let key in a) {
      if (!(key in b) || !deepEqual(a[key], b[key])) {
        return false;
      }
    }
    for (let key in b) {
      if (!(key in a) || !deepEqual(b[key], a[key])) {
        return false;
      }
    }
    return true;
  } else {
    return a === b;
  }
};

export { padNumer, capitalize, deepEqual };
