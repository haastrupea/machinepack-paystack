describe('Paystack.deactivateDedicatedAccount()', () => {
  it('Successfully hit deactivate Dedicated Account endpoint', (done) => {
    global.Paystack.deactivateDedicatedAccount({
      apiKey: global.apiKey,
      dedicated_account_id: 234
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })

  it('Faild to deactivate Dedicated Account with fake API KEY', (done) => {
    global.Paystack.deactivateDedicatedAccount({
      apiKey: 'fake Api key',
      dedicated_account_id: 234
    }).exec(function (error, response) {
      if (error) return done(error)
      if (response.status === false) return done()
      return done(response)
    })
  })
})
