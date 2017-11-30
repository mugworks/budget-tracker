

export default {
  get() {
    return fetch('http://localhost:3000/api/categories')
      .then(response => response.json());
  }
};

