const mongoose = require("mongoose")
const moment = require("moment")

const TransactionSchema = mongoose.Schema({
  amount: {
    type: Number,
    required: [true, "Valor da transação é obrigatório!"]
  },
  transaction_description: {
    type: String,
    maxLength: 200,
    required: [true, "Descrição da transação é obrigatório!"]
  },
  payment_method: {
    type: String,
    enum: ["debit_card", "credit_card"],
    required: [true, "Tipo de pagamento é obrigatório! (débito ou crédito)"]
  },
  card_number: {
    type: String,
    required: [true, "Número do cartão é obrigatório!"]
  },
  card_cvv: {
    type: String,
    min: 3,
    max: 4,
    required: [true, "Código de verificação do cartão (CVV) é obrigatório!"]
  },
  card_holder_name: {
    type: String,
    maxLength: 150,
    required: [true, "Nome do titular do cartão é obrigatório!"]
  },
  card_expiration_date: {
    type: String,
    required: [true, "Data de validade do cartão é obrigatório!"]
  }
}, {
    timestamps: true
  }
)

TransactionSchema.pre('save', () => {
  this.setTheLastFourCardNumbers()
  this.setformatExpirationDate()
})

TransactionSchema.methods = {
  setTheLastFourCardNumbers() {
    this.card_number = this.card_number.substr(-4)
  },

  //
  setformatExpirationDate() {
    this.card_expiration_date = moment(this.card_expiration_date).format('MMYYYY')
  }
}

module.exports = mongoose.model("Transaction", TransactionSchema)
