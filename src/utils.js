/* eslint-disable id-length */
const padNumber = (num, size = 3) => {
  let str = num.toString();
  while (str.length < size) {
    str = '0' + str;
  }
  return str;
};

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

const deepEqual = (a, b) => {
  if (
    typeof a === 'object' &&
    a != null &&
    (typeof b === 'object' && b != null)
  ) {
    const count = [0, 0];
    //eslint-disable-next-line no-unused-vars
    for (const _ in a) {
      count[0]++;
    }
    //eslint-disable-next-line no-unused-vars
    for (const _ in b) {
      count[1]++;
    }
    if (count[0] - count[1] !== 0) {
      return false;
    }
    for (const key in a) {
      if (!(key in b) || !deepEqual(a[key], b[key])) {
        return false;
      }
    }
    for (const key in b) {
      if (!(key in a) || !deepEqual(b[key], a[key])) {
        return false;
      }
    }
    return true;
  }
  return a === b;
};

export {padNumber, capitalize, deepEqual};
