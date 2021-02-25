describe('Paystack.fetchProduct()', () => {
  it('Successfully hit fetch Product endpoint', (done) => {
    global.Paystack.fetchProduct({
      apiKey: global.apiKey,
      id: ' 526'
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })

  it('Faild to fetch Product with fake API KEY', (done) => {
    global.Paystack.fetchProduct({
      apiKey: 'fake Api key',
      id: ' 526'
    }).exec(function (error, response) {
      if (error) return done(error)
      if (response.status === false) return done()
      return done(response)
    })
  })
})
