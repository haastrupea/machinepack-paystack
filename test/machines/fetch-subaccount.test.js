describe('Paystack.fetchSubaccount()', () => {
  it('Successfully hit fetch Subaccount endpoint', (done) => {
    global.Paystack.fetchSubaccount({
      apiKey: global.apiKey,
      id_or_code: 'ACCT_4hl4xenwpjy5wb'
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })

  it('Faild to fetch Subaccount with fake API KEY', (done) => {
    global.Paystack.fetchSubaccount({
      apiKey: 'fake Api key',
      id_or_code: 'ACCT_4hl4xenwpjy5wb'
    }).exec(function (error, response) {
      if (error) return done(error)
      if (response.status === false) return done()
      return done(response)
    })
  })
})
