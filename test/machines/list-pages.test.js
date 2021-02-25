describe('Paystack.listPages()', () => {
  it('Successfully retrieved list of Pages without query params', (done) => {
    global.Paystack.listPages({
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

  it('Failed to retrieve Pages with wrong API KEY', (done) => {
    global.Paystack.listPages({
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
