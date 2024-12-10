import pgPromise from "pg-promise";
import dbConfig from "../config/db.config.json";

const pgp = pgPromise();

export const db = pgp({
  user: dbConfig.user,
  password: dbConfig.password,
  host: dbConfig.host,
  port: dbConfig.port,
  database: dbConfig.database,
});
