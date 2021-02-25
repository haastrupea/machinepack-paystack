describe('Paystack.fetchDedicatedAccount()', () => {
  it('Successfully hit fetch Dedicated Account endpoint', (done) => {
    global.Paystack.fetchDedicatedAccount({
      apiKey: global.apiKey,
      dedicated_account_id: 234
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })

  it('Faild to fetch Dedicated Account with fake API KEY', (done) => {
    global.Paystack.fetchDedicatedAccount({
      apiKey: 'fake Api key',
      dedicated_account_id: 234
    }).exec(function (error, response) {
      if (error) return done(error)
      if (response.status === false) return done()
      return done(response)
    })
  })
})
