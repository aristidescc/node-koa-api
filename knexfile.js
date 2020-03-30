// Update with your config settings.
const path = require('path');

const BASE_PATH = path.join(__dirname, 'src', 'server', 'db');

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'koa_api',
      user:     'aristides',
      password: 'C4n4l35D1g174l35'
    },
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  },
  test: {
    client: 'pg',
    connection: {
      database: 'koa_api_test',
      user:     'aristides',
      password: 'C4n4l35D1g174l35'
    },
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  }
  
};
