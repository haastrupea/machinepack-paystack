describe('Paystack.updateSubaccount()', () => {
  it('Successfully hit update Subaccount endpoint', (done) => {
    global.Paystack.updateSubaccount({
      apiKey: global.apiKey,
      id_or_code: 111,
      primary_contact_email: 'dafe@aba.com',
      percentage_charge: 18.9,
      active: true,
      business_name: 'updated sailscasts',
      settlement_bank: '044'
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })

  it('Failed to Update Subaccounts with wrong API KEY', (done) => {
    global.Paystack.updateSubaccount({
      apiKey: 'wrong or fake key',
      id_or_code: 111,
      primary_contact_email: 'dafe@aba.com',
      percentage_charge: 18.9,
      active: true,
      business_name: 'updated sailscasts',
      settlement_bank: '044'
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
