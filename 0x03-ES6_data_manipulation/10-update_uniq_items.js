export default function updateUniqueItems(map) {
  if (typeof map !== 'object') {
    throw new Error ("Cannot process");
  }

  Object.keys(map).forEach(function(key) {
    if(map[key] === 1) {
      map[key] = 100;
    }
  });
}
