describe('Paystack.fetchSettlementTransactions()', () => {
  it('Successfully retrieved list of Settlements without query params', (done) => {
    global.Paystack.fetchSettlementTransactions({
      apiKey: global.apiKey,
      id: '29394'
    }).exec(function (error, _) {
      if (error) return done(error)

      return done()
    })
  })

  it('Failed to retrieve Settlements tr with wrong API KEY', (done) => {
    global.Paystack.fetchSettlementTransactions({
      apiKey: 'wrong or fake key',
      id: '29394'
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
