const app = require("../../../src/app")
const Transaction = require("../../../src/app/models/transaction")
const Payable = require("../../../src/app/models/payable")

const supertest = require("supertest")

describe('PayableControllers', () => {
  it('should be able to create payables', async () => {
    const transaction = await Transaction.create({
      "amount": 2000,
      "transaction_description": "teste transação",
      "payment_method": "debit_card",
      "card_number": "1234",
      "card_cvv": "785",
      "card_holder_name": "Jhemyson Sousa",
      "card_expiration_date": "2020-02"
    })

    const response_supertest = await supertest(app)
      .post('/1/payables')
      .send({ transaction_id: transaction._id })

    expect(response_supertest.status).toBe(200)

    await Transaction.findByIdAndDelete(transaction._id)
    await Payable.findByIdAndDelete(response_supertest._id)
  })

  it('should be able to find all payables', async () => {
    const response_supertest = await supertest(app)
      .get('/1/payables')

    expect(response_supertest.status).toBe(200)
  })

  it('should be able to find by search payables', async () => {
    const response_supertest = await supertest(app)
      .get('/1/payables/search?status=waiting_funds')

    expect(response_supertest.status).toBe(200)
  })
})
