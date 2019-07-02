const { getNonNullFilters } = require("../../../src/app/repositories/helpers/common.helper")

describe('Common helpers', () => {
  it('should be able returns only non-null filters', async () => {

    const filters = {
      status: 'waiting_funds',
      amout: '',
      seller_id: '123456789'
    }

    const response_supertest = getNonNullFilters(filters)

    expect(response_supertest).toEqual({ status: 'waiting_funds', seller_id: '123456789' })
  })
})
