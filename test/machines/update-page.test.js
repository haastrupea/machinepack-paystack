describe('Paystack.updatePage()', () => {
  it('Successfully hit update Page endpoint', (done) => {
    global.Paystack.updatePage({
      apiKey: global.apiKey,
      id_or_slug: '5nApBwZkvY',
      name: 'Buttercup Brunch',
      amount: 500000,
      description: 'Gather your friends for the ritual that is brunch'
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })

  it('Failed to Update Pages with wrong API KEY', (done) => {
    global.Paystack.updatePage({
      apiKey: 'wrong or fake key',
      id_or_slug: '5nApBwZkvY',
      name: 'Buttercup Brunch',
      amount: 500000,
      description: 'Gather your friends for the ritual that is brunch'
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
