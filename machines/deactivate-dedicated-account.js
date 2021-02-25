const { getHeaders } = require('../helpers/get-headers')
const { makeRequest } = require('../helpers/make-request')

module.exports = {

  friendlyName: 'Deactivate Dedicated Account',

  description: 'Deactivate a dedicated account on your integration.',

  cacheable: false,

  sync: false,

  inputs: {
    apiKey: require('../constants/apiKey.input'),
    dedicated_account_id: {
      example: 12345,
      description: 'ID of dedicated account'
    }
  },

  exits: {

    success: {
      variableName: 'result',
      description: 'Done.'
    }

  },

  fn: function ({ apiKey, dedicated_account_id }, exits) {
    makeRequest(`/dedicated_account/${dedicated_account_id}`,
      {
        headers: getHeaders(apiKey || process.env.PAYSTACK_API_KEY),
        method: 'DELETE'
      }).then((dedicated_account) => {
      return exits.success(dedicated_account)
    }).catch(error => {
      return exits.error(error)
    })
  }

}
