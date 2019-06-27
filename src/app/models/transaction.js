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
    max: 4,
    min: 4,
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
    type: Date,
    required: [true, "Data de validade do cartão é obrigatório!"]
  }
},
  { timestamps: true }
)

TransactionSchema.pre('save', async function () {
  await this.setTheLastFourCardNumbers()
})

TransactionSchema.methods = {
  async setTheLastFourCardNumbers() {
    this.card_number = await this.card_number.substr(-4)
  }
}

module.exports = mongoose.model("Transaction", TransactionSchema)
