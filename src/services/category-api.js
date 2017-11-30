

export default {
  get() {
    return fetch('http://localhost:3001/api/categories')
      .then(response => response.json());
  }
};

