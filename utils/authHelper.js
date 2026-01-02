const { expect } = require('@playwright/test');

async function loginViaApi(request, username, password) {
  const response = await request.post('https://www.saucedemo.com/', {
    form: {
      username,
      password,
    },
  });

  expect([200, 302]).toContain(response.status());

  return response;
}

module.exports = {
  loginViaApi,
};
