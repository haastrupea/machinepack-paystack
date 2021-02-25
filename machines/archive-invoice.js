const { getHeaders } = require('../helpers/get-headers')
const { makeRequest } = require('../helpers/make-request')

module.exports = {

  friendlyName: 'Archive Invoice',

  description: 'Used to archive an invoice. Invoice will no longer be fetched on list or returned on verify.',

  cacheable: false,

  sync: false,

  inputs: {
    apiKey: require('../constants/apiKey.input'),
    code: {
      example: '1423',
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
    makeRequest(`/paymentrequest/archive/${code}`,
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
