export const weakMap = new WeakMap();
let times = 1;

export function queryAPI(endPoint) {
  weakMap.set(endPoint, times);
  times += 1;
  const countQuery = weakMap.get(endPoint);
  if (countQuery >= 5) {
    throw new Error('Endpoint load is high');
  }
}
