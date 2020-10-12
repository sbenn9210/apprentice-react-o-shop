require('dotenv').config();

module.exports = {
  development: {
    use_env_variable: 'SQL_CONNECTION_URL',
  },
  production: {
    use_env_variable: 'SQL_CONNECTION_URL',
  },
};
