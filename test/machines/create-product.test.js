describe('Paystack.createProduct()', () => {
  it('Successfully created a Product', (done) => {
    global.Paystack.createProduct({
      apiKey: global.apiKey,
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

  it('Faild to create Product with fake API KEY', (done) => {
    global.Paystack.createProduct({
      apiKey: 'fake Api key',
      description: 'Product Six Description',
      name: 'Product Six',
      price: 500000,
      currency: 'USD',
      limited: false,
      quantity: 100
    }).exec(function (error, response) {
      if (error) return done(error)
      if (response.status === false) return done()
      return done(response)
    })
  })
})
