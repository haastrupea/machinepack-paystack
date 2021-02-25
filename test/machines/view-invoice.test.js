describe('Paystack.viewInvoice()', () => {
  it('Successfully hit view Invoice endpoint', (done) => {
    global.Paystack.viewInvoice({
      apiKey: global.apiKey,
      id_or_code: '526'
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })

  it('Failed to view Invoice with fake API KEY', (done) => {
    global.Paystack.viewInvoice({
      apiKey: 'fake Api key',
      id_or_code: '526'
    }).exec(function (error, response) {
      if (error) return done(error)
      if (response.status === false) return done()
      return done(response)
    })
  })
})
