export default function cleanSet (set, startString) {
  let result = '';
  if (typeof startString !== 'string' || startString === '') {
    return result;
  }
  for (const val of set) {
    if (val.startsWith(startString)) {
        result += val.slice(startString.length) + '-';
    }
  }
  return result.slice(0, -1) // remove the last comma
}