const mongoose = require("mongoose")
const mongoosePaginateV2 = require("mongoose-paginate-v2")

const TransactionSchema = mongoose.Schema({
  object: {
    type: String,
    default: 'transaction'
  },
  amount: {
    type: Number,
    min: 100,
    required: [true, "Valor da transação é obrigatório!"]
  },
  transaction_description: {
    type: String,
    minLength: 4,
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

TransactionSchema.plugin(mongoosePaginateV2)

module.exports = mongoose.model("Transaction", TransactionSchema)
