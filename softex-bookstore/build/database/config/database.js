"use strict";
require("dotenv/config");
const { DB_USER, DB_PASS, DB_NAME, DB_HOST } = process.env;
const config = {
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    host: DB_HOST,
    dialect: "mysql"
};
module.exports = config;
