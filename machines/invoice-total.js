const { getHeaders } = require('../helpers/get-headers')
const { makeRequest } = require('../helpers/make-request')

module.exports = {

  friendlyName: 'Invoice Total',

  description: 'Get invoice metrics for dashboard',

  cacheable: false,

  sync: false,

  inputs: {
    apiKey: require('../constants/apiKey.input')
  },

  exits: {

    success: {
      variableName: 'result',
      description: 'Done.'
    }

  },

  fn: function ({ apiKey }, exits) {
    makeRequest('/paymentrequest/totals',
      {
        headers: getHeaders(apiKey || process.env.PAYSTACK_API_KEY)
      }).then((invoice) => {
      return exits.success(invoice)
    }).catch(error => {
      return exits.error(error)
    })
  }

}
