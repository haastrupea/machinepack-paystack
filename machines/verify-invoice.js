const { getHeaders } = require('../helpers/get-headers')
const { makeRequest } = require('../helpers/make-request')

module.exports = {

  friendlyName: 'Verify Invoice',

  description: 'Verify details of an invoice on your integration.',

  cacheable: false,

  sync: false,

  inputs: {
    apiKey: require('../constants/apiKey.input'),
    code: {
      example: '25833615',
      description: 'Invoice code'
    }
  },

  exits: {

    success: {
      variableName: 'result',
      description: 'Done.'
    }

  },

  fn: function ({ apiKey, code }, exits) {
    makeRequest(`/paymentrequest/verify/${code}`,
      {
        headers: getHeaders(apiKey || process.env.PAYSTACK_API_KEY)
      }).then((invoice) => {
      return exits.success(invoice)
    }).catch(error => {
      return exits.error(error)
    })
  }

}
