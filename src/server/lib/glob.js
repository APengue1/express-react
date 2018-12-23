const path = require('path');
const glob = require('glob');

module.exports = (directory, pattern) => {
  return glob.sync(path.resolve(directory, pattern))
};

