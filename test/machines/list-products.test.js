describe('Paystack.listProducts()', () => {
  it('Successfully retrieved list of Products without query params', (done) => {
    global.Paystack.listProducts({
      apiKey: global.apiKey
    }).exec(function (error, response) {
      if (error) return done(error)

      if (response) {
        if (response.status) {
          return done()
        }
      }
    })
  })

  it('Failed to retrieve Products with wrong API KEY', (done) => {
    global.Paystack.listProducts({
      apiKey: 'wrong or fake key'
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
