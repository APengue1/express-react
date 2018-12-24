const path = require('path');

process.env.NODE_ENV = 'test';

const server_root = `${path.resolve(__dirname, '../../')}`;
const server = require(`${server_root}/server`);

beforeAll((done) => {
  server.run((err, port) => {
    if (err) {
      throw err;
    }
    const base_url = `http://localhost:${port}`
    // eslint-disable-next-line no-console
    console.log(`Running tests on ${base_url}`)
    require.main.base_url = base_url
    done();
  });
});
