const randomJoke = (data) => {
  const index = Math.floor(Math.random() * data.length);
  const joke = data[index];

  return joke;
};

module.exports = { randomJoke };
