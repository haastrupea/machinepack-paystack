describe('Paystack.addProducts()', () => {
  it('Successfully hit add Products endpoint', (done) => {
    global.Paystack.addProducts({
      apiKey: global.apiKey,
      id: 526,
      product: [33, 66, 44]
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })

  it('Failed to add Products with fake API KEY', (done) => {
    global.Paystack.addProducts({
      apiKey: 'fake Api key',
      id: 526,
      product: [33, 66, 44]
    }).exec(function (error, response) {
      if (error) return done(error)
      if (response.status === false) return done()
      return done(response)
    })
  })
})
