const mongoose = require("mongoose")

const PayablesSchema = mongoose.Schema({
  object: {
    type: String,
    default: 'payable'
  },
  status: {
    type: String,
    enum: ['paid', 'waiting_funds'],
    required: [true, 'Status é obrigatório!']
  },
  amount: {
    type: Number,
    required: [true, 'Valor é obrigatório!']
  },
  fee: {
    type: Number,
    required: [true, 'Processamento é obrigatório!']
  },
  payment_date: {
    type: Date,
    required: [true, 'Data de pagamento é obrigatório!']
  },
  transaction_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Transaction'
  }
},
  { timestamps: true }
)

module.exports = mongoose.model('Payables', PayablesSchema)
