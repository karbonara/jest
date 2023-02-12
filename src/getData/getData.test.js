const getData = require('./getData');

describe(getData, () => {
  test('getData', async () => {
    const data = await getData('https://api.github.com/users/Hexlet');
    expect(data).toHaveProperty('login');
  });
});

