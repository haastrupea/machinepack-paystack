describe('Paystack.sendNotification()', () => {
  it('Successfully hit send Notification endpoint', (done) => {
    global.Paystack.sendNotification({
      apiKey: global.apiKey,
      code: '526'
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })

  it('Failed to send Notification with fake API KEY', (done) => {
    global.Paystack.sendNotification({
      apiKey: 'fake Api key',
      code: '526'
    }).exec(function (error, response) {
      if (error) return done(error)
      if (response.status === false) return done()
      return done(response)
    })
  })
})
