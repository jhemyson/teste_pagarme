const app = require("../../src/app")

const supertest = require("supertest")

describe('TransactionsControllers', () => {
  it('should be able to create transactions', async () => {
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

  it('should be able to find all transactions', async () => {
    const response_supertest = await supertest(app)
      .get('/1/transactions')

    expect(response_supertest.status).toBe(200)
  })
})
