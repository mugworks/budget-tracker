

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
  },
  delete(id) {
    return fetch(`/api/categories/${id}`, {
      method: 'delete'
    })
      .then(response => response.json());
  },
  put(id) {
    console.log ('in put', id);
    return fetch(`/api/categories/${id}`, {
      method: 'put'
    })
      .then(response => response.json());
  }
};


