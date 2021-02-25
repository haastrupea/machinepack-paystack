describe('Paystack.createInvoice()', () => {
  it('Successfully created a Invoice', (done) => {
    global.Paystack.createInvoice({
      apiKey: global.apiKey,
      description: 'a test invoice',
      line_items: [
        { name: 'item 1', amount: 20000 },
        { name: 'item 2', amount: 20000 }
      ],
      tax: [
        { name: 'VAT', amount: 2000 }
      ],
      customer: 'CUS_xwaj0txjryg393b',
      due_date: '2020-07-08',
      amount: 200000
    }).exec(function (error, _) {
      if (error) return done(error)

      return done()
    })
  })

  it('Failed to create Invoice with fake API KEY', (done) => {
    global.Paystack.createInvoice({
      apiKey: 'fake Api key',
      description: 'a test invoice',
      line_items: [
        { name: 'item 1', amount: 20000 },
        { name: 'item 2', amount: 20000 }
      ],
      tax: [
        { name: 'VAT', amount: 2000 }
      ],
      customer: 'CUS_xwaj0txjryg393b',
      due_date: '2020-07-08',
      amount: 200000
    }).exec(function (error, response) {
      if (error) return done(error)
      if (response.status === false) return done()
      return done(response)
    })
  })
})
