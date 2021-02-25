describe('Paystack.fetchSettlements()', () => {
  it('Successfully retrieved list of Settlements without query params', (done) => {
    global.Paystack.fetchSettlements({
      apiKey: global.apiKey
    }).exec(function (error, response) {
      if (error) return done(error)

      if (response) {
        if (response.status) {
          return done()
        }
      }
    })
  })

  it('Failed to retrieve Settlements with wrong API KEY', (done) => {
    global.Paystack.fetchSettlements({
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
