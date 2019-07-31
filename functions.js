const functions = {
  add: (a, b) => a + b,
  fetchUser: () =>
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.json())
      .catch(err => 'error')
};

// module.exports = functions;
functions.fetchUser().then(data => {
  console.log(data);
});
