describe('Paystack.listInvoices()', () => {
  it('Successfully retrieved list of Invoices without query params', (done) => {
    global.Paystack.listInvoices({
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

  it('Failed to retrieve Invoices with wrong API KEY', (done) => {
    global.Paystack.listInvoices({
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
