const { getHeaders } = require('../helpers/get-headers')
const { makeRequest } = require('../helpers/make-request')

module.exports = {

  friendlyName: 'Create Invoice',

  description: 'Create an invoice for payment on your integration',

  cacheable: false,

  sync: false,

  inputs: {
    apiKey: require('../constants/apiKey.input'),
    customer: {
      example: '25833615',
      description: 'Customer id or code',
      required: true
    },
    amount: {
      example: 200000,
      description: 'Payment request amount. Only useful if line items and tax values are ignored. endpoint will throw a friendly warning if neither is available.',
      required: true
    },
    due_date: {
      example: '2020-07-08',
      description: 'ISO 8601 representation of request due date'
    },
    line_items: {
      example: [{}],
      description: 'Array of line items int the format [{"name":"item 1", "amount":2000}]'
    },
    tax: {
      example: [{}],
      description: 'Array of taxes to be charged in the format [{"name":"VAT", "amount":2000}]'
    },
    currency: {
      example: 'NGN',
      description: 'Specify the currency of the invoice. Defaults to NGN'
    },
    send_notification: {
      example: true,
      description: 'Indicates whether Paystack sends an email notification to customer. Defaults to true'
    },
    draft: {
      example: true,
      description: 'Indicate if request should be saved as draft. Defaults to false and overrides send_notification'
    },
    has_invoice: {
      example: true,
      description: 'Set to true to create a draft invoice (adds an auto incrementing invoice number if none is provided) even if there are no line_items or tax passed'
    },
    invoice_number: {
      example: 1,
      description: 'Numeric value of invoice. Invoice will start from 1 and auto increment from there. This field is to help override whatever value Paystack decides. Auto increment for subsequent invoices continue from this point.'
    }
  },

  exits: {

    success: {
      variableName: 'result',
      description: 'Done.'
    }

  },

  fn: function ({ apiKey, bodyParams }, exits) {
    makeRequest('/paymentrequest', {
      method: 'POST',
      headers: getHeaders(apiKey || process.env.PAYSTACK_API_KEY),
      body: JSON.stringify(bodyParams)
    }).then((paymentrequest) => {
      return exits.success(paymentrequest)
    }).catch(error => {
      return exits.error(error)
    })
  }

}
