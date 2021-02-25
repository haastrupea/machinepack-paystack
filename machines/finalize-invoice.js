const { getHeaders } = require('../helpers/get-headers')
const { makeRequest } = require('../helpers/make-request')

module.exports = {

  friendlyName: 'Finalize Invoice',

  description: 'Finalize a Draft Invoice',

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
    makeRequest(`/paymentrequest/finalize/${code}`,
      {
        headers: getHeaders(apiKey || process.env.PAYSTACK_API_KEY),
        method: 'POST'
      }).then((invoice) => {
      return exits.success(invoice)
    }).catch(error => {
      return exits.error(error)
    })
  }

}
