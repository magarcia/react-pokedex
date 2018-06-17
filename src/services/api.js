const api = url => {
  const cachedResponse = localStorage.getItem(url);

  if (cachedResponse !== null) {
    return Promise.resolve(JSON.parse(cachedResponse));
  }
  return fetch(url).then(response => {
    if (response.ok) {
      const json = response.json();
      json.then(data => localStorage.setItem(url, JSON.stringify(data)));
      return json;
    }
    throw new Error('Something went wrong ...');
  });
};

export default api;
