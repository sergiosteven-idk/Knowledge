// Backend/bds/mysql.js
import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

export const mysqlConnection = await mysql.createPool({
  host: process.env.MYSQL_HOST || "localhost",
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "",
  database: process.env.MYSQL_DATABASE || "knowledge",
});
