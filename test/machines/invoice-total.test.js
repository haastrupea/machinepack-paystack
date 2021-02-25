describe('Paystack.invoiceTotal()', () => {
  it('Successfully hit invoice Total endpoint', (done) => {
    global.Paystack.invoiceTotal({
      apiKey: global.apiKey
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })

  it('Failed to invoice Total with fake API KEY', (done) => {
    global.Paystack.invoiceTotal({
      apiKey: 'fake Api key'
    }).exec(function (error, response) {
      if (error) return done(error)
      if (response.status === false) return done()
      return done(response)
    })
  })
})
