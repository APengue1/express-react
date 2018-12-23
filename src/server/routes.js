const glob = require.main.require('./lib/glob');

module.exports = (server) => {
  const route_files = glob(__dirname, 'routes/**/*.js')
  for(const route_file of route_files) {
    const route =
      route_file
        .replace(`${__dirname}/routes`, '')
        .replace('/index', '')
        .replace('.js', '');

    server.use(route, require(route_file));
  }
};
