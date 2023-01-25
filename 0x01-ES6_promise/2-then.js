export default function handleResponseFromAPI(promise) {
  const stats = { status: 200, body: 'success' };
  return promise
    .then(() => stats)
    .catch(() => new Error())
    .finally(() => { console.log('Got a response from the API'); });
}
