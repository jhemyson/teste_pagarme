const mongoose = require("mongoose")
const mongoosePaginateV2 = require("mongoose-paginate-v2")

const PayableSchema = mongoose.Schema({
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

PayableSchema.plugin(mongoosePaginateV2)

module.exports = mongoose.model('Payables', PayableSchema)
