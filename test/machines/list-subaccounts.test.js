describe('Paystack.listSubaccounts()', () => {
  it('Successfully retrieved list of Subaccounts without query params', (done) => {
    global.Paystack.listSubaccounts({
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

  it('Failed to retrieve Subaccounts with wrong API KEY', (done) => {
    global.Paystack.listSubaccounts({
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
