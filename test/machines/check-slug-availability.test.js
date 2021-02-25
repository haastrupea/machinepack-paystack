describe('Paystack.checkSlugAvailability()', () => {
  it('Successfully Check Slug Availability', (done) => {
    global.Paystack.checkSlugAvailability({
      apiKey: global.apiKey,
      slug: '5nApBwZkvY'
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })

  it('Failed to  Check Slug Availability with fake API KEY', (done) => {
    global.Paystack.checkSlugAvailability({
      apiKey: 'fake Api key',
      slug: '5nApBwZkvY'
    }).exec(function (error, response) {
      if (error) return done(error)
      if (response.status === false) return done()
      return done(response)
    })
  })
})
