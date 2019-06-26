require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.teste" : ".env"
})

const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const helmet = require("helmet")
const database_url = require("./config/database")

/**
 * Configurações da applicação
 */
class AppController {
  constructor() {
    this.express = express()

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
    mongoose.connect(process.env.DATABASE, {
      useNewUrlParser: true
    })
  }

  /**
   * Se houver erro, retorna em formato json
   */
  _exceptions() {
    this.express.use(function(error, req, res, next){
      if(error){
        return res.status(error.status).json(error)
      }

      return next()
    })
  }
}

module.exports = new AppController().express
