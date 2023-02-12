const delay = require('./delay')

describe(delay, () => {
  test('delay', async () => {
    const sum = await delay(() => 1 + 1, 1000)
    expect(sum).toBe(2)
  })
})