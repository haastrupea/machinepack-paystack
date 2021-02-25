describe('Paystack.fetchPage()', () => {
  it('Successfully hit fetch Page endpoint', (done) => {
    global.Paystack.fetchPage({
      apiKey: global.apiKey,
      id: ' 526'
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })

  it('Failed to fetch Page with fake API KEY', (done) => {
    global.Paystack.fetchPage({
      apiKey: 'fake Api key',
      id: ' 526'
    }).exec(function (error, response) {
      if (error) return done(error)
      if (response.status === false) return done()
      return done(response)
    })
  })
})
