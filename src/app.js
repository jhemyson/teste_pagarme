require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const helmet = require("helmet")
const morgan = require("morgan")

/**
 * Configurações da applicação
 */
class AppController {
  constructor() {
    this.express = express()
    this._database_env = process.env.NODE_ENV == 'test'
      ? process.env.DATABASETEST
      : process.env.DATABASE

    this._middlewares()
    this._routes()
    this._database()
    this._exceptions()
  }
  /**
   * Inicia os middlewares
   */
  _middlewares() {
    this.express.use(helmet())
    this.express.use(cors())
    this.express.use(express.json())
    this.express.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
  }

  /**
   * Inicia as rotas
   */
  _routes() {
    this.express.use(require("./app/routes"))
  }

  /**
   * Inicia o banco de dados
   */
  _database() {
    mongoose.connect(this._database_env, {
      useNewUrlParser: true
    })
  }

  /**
   * Se houver erro, retorna em formato json
   */
  _exceptions() {
    this.express.use(function (error, req, res, next) {
      if (error) {
        return res.status(error.status).json(error)
      }

      return next()
    })
  }
}

module.exports = new AppController().express
