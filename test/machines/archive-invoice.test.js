describe('Paystack.archiveInvoice()', () => {
  it('Successfully hit archive Invoice endpoint', (done) => {
    global.Paystack.archiveInvoice({
      apiKey: global.apiKey,
      code: '526'
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })

  it('Failed to archive Invoice with fake API KEY', (done) => {
    global.Paystack.archiveInvoice({
      apiKey: 'fake Api key',
      code: '526'
    }).exec(function (error, response) {
      if (error) return done(error)
      if (response.status === false) return done()
      return done(response)
    })
  })
})
