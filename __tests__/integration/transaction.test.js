const Transaction = require("../../src/app/models/transaction")
const app = require("../../src/app")

const supertest = require("supertest")

describe('Transactions', () => {
  it('should be able to create transactions', async () => {

    console.log('node env', process.env.NODE_ENV)

    const response_supertest = await supertest(app)
      .post('/1/transactions')
      .send({
        "amount": 400,
        "transaction_description": "teste transação",
        "payment_method": "debit_card",
        "card_number": "1234567891011",
        "card_cvv": "785",
        "card_holder_name": "Jhemyson Sousa",
        "card_expiration_date": "2020-12"
      })

    expect(response_supertest.status).toBe(200)
  })


})
