"use strict"
require("dotenv").config()

const database = {
  production: process.env.DATABASE,
  // development: process.env-dev.DATABASE,
  // test: process.env-test.DATABASE
}

/**
 * Seleciona o banco de acordo com o ambiente:
 * - produção
 * - desenvolvimento
 * - teste
 */
module.exports = () => {
  return database.production
}



