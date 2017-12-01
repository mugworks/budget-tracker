

export default {
  get() {
    return fetch('/api/categories')
      .then(response => response.json());
  },
  post(data) {
    return fetch('/api/categories', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json());
  }
};


