export default function cleanSet(set, startString) {
  let cleanedSet = '';
  const arr = [];

  if (startString && typeof startString === 'string') {
    for (const value of set) {
      if (value && value.startsWith(startString)) {
        arr.push(value.slice(startString.length));
      }
    }
    cleanedSet = arr.join('-');
  }
  return cleanedSet;
}
