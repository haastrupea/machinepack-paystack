describe('Paystack.createPage()', () => {
  it('Successfully created a Page', (done) => {
    global.Paystack.createPage({
      apiKey: global.apiKey,
      name: 'Buttercup Brunch',
      amount: 500000,
      description: 'Gather your friends for the ritual that is brunch'
    }).exec(function (error, _) {
      if (error) return done(error)

      return done()
    })
  })

  it('Failed to create Page with fake API KEY', (done) => {
    global.Paystack.createPage({
      apiKey: 'fake Api key',
      name: 'Buttercup Brunch',
      amount: 500000,
      description: 'Gather your friends for the ritual that is brunch'
    }).exec(function (error, response) {
      if (error) return done(error)
      if (response.status === false) return done()
      return done(response)
    })
  })
})
