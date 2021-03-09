describe('Paystack.listDedicatedAccounts()', () => {
  it('Successfully retrieved list of DedicatedAccounts without query params', (done) => {
    global.Paystack.listDedicatedAccounts({
      apiKey: global.apiKey
    }).exec(function (error, response) {
      if (error) return done(error)

      if (response.status) {
        return done()
      }
    })
  })

  it('Failed to retrieve DedicatedAccounts with wrong API KEY', (done) => {
    global.Paystack.listDedicatedAccounts({
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
