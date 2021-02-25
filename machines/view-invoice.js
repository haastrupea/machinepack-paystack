const { getHeaders } = require('../helpers/get-headers')
const { makeRequest } = require('../helpers/make-request')

module.exports = {

  friendlyName: 'View Invoice',

  description: 'Get details of an invoice on your integration.',

  cacheable: false,

  sync: false,

  inputs: {
    apiKey: require('../constants/apiKey.input'),
    id_or_code: {
      example: ' 25833615',
      description: 'The invoice ID or code you want to fetch'
    }
  },

  exits: {

    success: {
      variableName: 'result',
      description: 'Done.'
    }

  },

  fn: function ({ apiKey, id_or_code }, exits) {
    makeRequest(`/paymentrequest/${id_or_code}`,
      {
        headers: getHeaders(apiKey || process.env.PAYSTACK_API_KEY)
      }).then((invoice) => {
      return exits.success(invoice)
    }).catch(error => {
      return exits.error(error)
    })
  }

}
