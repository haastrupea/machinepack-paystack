describe('Paystack.verifyInvoice()', () => {
  it('Successfully hit verify Invoice endpoint', (done) => {
    global.Paystack.verifyInvoice({
      apiKey: global.apiKey,
      code: '526'
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })

  it('Failed to verify Invoice with fake API KEY', (done) => {
    global.Paystack.verifyInvoice({
      apiKey: 'fake Api key',
      code: '526'
    }).exec(function (error, response) {
      if (error) return done(error)
      if (response.status === false) return done()
      return done(response)
    })
  })
})
