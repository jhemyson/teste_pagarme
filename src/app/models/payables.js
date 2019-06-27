const mongoose = require("mongoose")
const moment = require("moment")

const calculateProcessingRate = require("../repositories/calculate-processing-rate.repositorie")

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

PayablesSchema.methods = {
  setFee(payment_method) {
    this.fee -= await calculateProcessingRate(this.amount, payment_method)
  }
}


module.exports = mongoose.model('Payables', PayablesSchema)
