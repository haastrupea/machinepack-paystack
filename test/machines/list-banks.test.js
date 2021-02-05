describe('Paystack.listBanks()', () => {
  it('Successfully retrieved banks with only required params', (done) => {
    global.Paystack.listBanks({
      apiKey: process.env.PAYSTACK_API_KEY_FOR_TESTS,
      country: 'nigeria',
      use_cursor: true,
      perPage: 1
    }).exec(function (error, banks) {
      console.log(banks)
      if (error) return done(error)
      return done()
    })
  })
  it.only('failed to retrieved banks with wrong apiKey', (done) => {
    global.Paystack.listPlans({
      apiKey: 'absolutely_FAKEY!!',
      country: 'nigeria',
      use_cursor: true,
      perPage: 1
    }).exec(function (error, response) {
      if (error) return done(error)
      if (response.message === 'Invalid key') return done()
      return done(response)
    })
  })
})
