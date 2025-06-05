import { ConnectionOptions } from 'typeorm';

const dbConfig: ConnectionOptions = {
  type: 'postgres', // or 'mysql', 'sqlite', etc.
  host: 'localhost',
  port: 5432, // default port for PostgreSQL
  username: 'your_username',
  password: 'your_password',
  database: 'your_database_name',
  synchronize: true, // set to false in production
  logging: false,
  entities: [
    __dirname + '/../models/*.ts' // path to your entity files
  ],
};

export default dbConfig;