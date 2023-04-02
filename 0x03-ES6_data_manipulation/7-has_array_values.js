export default function hasValuesFromArray (set, array) {
  const result = [];
  array.forEach((arr) => {
    [...set].find((elem) => elem === arr ? result.push(true) : result.push(false));
  });
  const res = [...result].find((ans) => ans === false);
  if (res === false) {
    return false;
  }
  else {
    return true;
  }
};