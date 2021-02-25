describe('Paystack.updateProduct()', () => {
  it('Successfully hit update Product endpoint', (done) => {
    global.Paystack.updateProduct({
      apiKey: global.apiKey,
      id: '111',
      description: 'Product Six Description',
      name: 'Product Six',
      price: 500000,
      currency: 'USD',
      limited: false,
      quantity: 100
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })

  it('Failed to Update Products with wrong API KEY', (done) => {
    global.Paystack.updateProduct({
      apiKey: 'wrong or fake key',
      id: '111',
      description: 'Product Six Description',
      name: 'Product Six',
      price: 500000,
      currency: 'USD',
      limited: false,
      quantity: 100
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
