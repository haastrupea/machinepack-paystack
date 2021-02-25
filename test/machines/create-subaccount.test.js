describe('Paystack.createSubaccount()', () => {
  it('Successfully hit create Subaccount endpoint', (done) => {
    global.Paystack.createSubaccount({
      apiKey: global.apiKey,
      business_name: 'testting subaccount',
      settlement_bank: '044',
      account_number: '1234567890',
      percentage_charge: 20.4,
      description: 'new subaccount testing'
    }).exec(function (error, _) {
      if (error) return done(error)

      return done()
    })
  })

  it('Faild to create Subaccount with fake API KEY', (done) => {
    global.Paystack.createSubaccount({
      apiKey: 'fake Api key',
      business_name: 'testting subaccount',
      settlement_bank: '044',
      account_number: '1234567890',
      percentage_charge: 20.4,
      description: 'new subaccount testing'
    }).exec(function (error, response) {
      if (error) return done(error)
      if (response.status === false) return done()
      return done(response)
    })
  })
})
