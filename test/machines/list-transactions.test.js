describe('Paystack.listTransactions()', () => {
  it('Successfully retrieved Transactions without query params', (done) => {
    global.Paystack.listTransactions({
      apiKey: process.env.PAYSTACK_API_KEY_FOR_TESTS
    }).exec(function (error, response) {
      if (error) return done(error)

      if (response) {
        if (response.status) {
          return done()
        }
      }
    })
  })

  it('Failed to retrieve Transactions with wrong APLI KEY', (done) => {
    global.Paystack.listTransactions({
      apiKey: 'wrong or fake key'
    }).exec(function (error, response) {
      if (error) return done(error)

      if (response) {
        if (response.status === false) {
          return done()
        }
      }
    })
  })
})
