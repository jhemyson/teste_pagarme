require("dotenv").config()

const database = {
  production: process.env.DATABASE,
  test: process.env.test.DATABASE
}

/**
 * Seleciona o banco de acordo com o ambiente:
 * - produção
 * - teste
 */
module.exports = () => {
  return database['process.env.NODE_ENV']
}



