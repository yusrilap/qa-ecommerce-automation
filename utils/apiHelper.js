async function checkAppHealth(request) {
  const response = await request.get('https://www.saucedemo.com');

  if (![200, 302].includes(response.status())) {
    throw new Error(`App health check failed. Status: ${response.status()}`);
  }
}

module.exports = {
  checkAppHealth
};
