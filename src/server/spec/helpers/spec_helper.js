const path = require('path');

process.env.NODE_ENV = 'test';

const serverRoot = `${path.resolve(__dirname, '../../')}`;
const server = require(`${serverRoot}/server`);

beforeAll((done) => {
  server.run((err, port) => {
    if (err) {
      throw err;
    }
    const baseUrl = `http://localhost:${port}`
    // eslint-disable-next-line no-console
    console.log(`Running tests on ${baseUrl}`)
    require.main.baseUrl = baseUrl
    done();
  });
});
