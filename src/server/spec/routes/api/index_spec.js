const Frisby = require('frisby');

describe('/', () => {
  beforeAll(() => {
    this.endpoint = `${require.main.base_url}/api`
  })

  it("returns 200", async () => {
    await Frisby.get(this.endpoint).expect('status', 200)
  })
});
