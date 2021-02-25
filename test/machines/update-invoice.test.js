describe('Paystack.updateInvoice()', () => {
  it('Successfully hit update Invoice endpoint', (done) => {
    global.Paystack.updateInvoice({
      apiKey: global.apiKey,
      id_or_code: '5nApBwZkvY',
      description: 'Update test invoice',
      due_date: '2017-05-10'
    }).exec(function (error, _) {
      if (error) return done(error)
      return done()
    })
  })

  it('Failed to update Invoice with wrong API KEY', (done) => {
    global.Paystack.updateInvoice({
      apiKey: 'wrong or fake key',
      id_or_code: '5nApBwZkvY',
      description: 'Update test invoice',
      due_date: '2017-05-10'
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
