describe('Paystack.finalizeInvoice()', () => {
  it('Successfully hit finalize Invoice endpoint', (done) => {
    global.Paystack.finalizeInvoice({
      apiKey: global.apiKey,
      code: '526'
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })

  it('Failed to finalize Invoice with fake API KEY', (done) => {
    global.Paystack.finalizeInvoice({
      apiKey: 'fake Api key',
      code: '526'
    }).exec(function (error, response) {
      if (error) return done(error)
      if (response.status === false) return done()
      return done(response)
    })
  })
})
