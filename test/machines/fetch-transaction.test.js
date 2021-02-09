const { getHeaders } = require('../../helpers/get-headers')
const { makeRequest } = require('../../helpers/make-request')

describe('Paystack.fetchTransaction()', () => {
  it('Successfully fetch transaction', (done) => {
    makeRequest('/transaction',
      {
        headers: getHeaders(process.env.PAYSTACK_API_KEY_FOR_TESTS)
      })
      .then((retrievedTransactions) => {
        global.Paystack.fetchTransaction({
          apiKey: process.env.PAYSTACK_API_KEY_FOR_TESTS,
          id: retrievedTransactions.data[0].id
        }).exec(function (error, response) {
          if (error) return done(error)
          if (response.status) {
            return done()
          }
        })
      }).catch(error => {
        return done(error)
      })
  })

  it('Failed to fetch transaction with wrong ID', (done) => {
    global.Paystack.fetchTransaction({
      apiKey: process.env.PAYSTACK_API_KEY_FOR_TESTS,
      id: 10000000000000100000000
    }).exec(function (error, response) {
      if (error) return done(error)
      if (response.status === false) {
        return done()
      }
    })
  })
})
