const { Client } = require("pg");

const connectionData = {
  user: process.env.DB_USER_MONGODB,
  host: process.env.HOST_LOCAL,
  database: process.env.DATABASE_NAME,
  password: process.env.PASSWORD_LOCAL,
  port: process.env.ENV_PORT_DB,
};
const client = new Client(connectionData);

module.exports = client;
