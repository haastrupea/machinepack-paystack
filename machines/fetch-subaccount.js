const { getHeaders } = require('../helpers/get-headers')
const { makeRequest } = require('../helpers/make-request')

module.exports = {

  friendlyName: 'Fetch Subaccount',

  description: 'The subaccount ID or code you want to fetch',

  cacheable: false,

  sync: false,

  inputs: {
    apiKey: require('../constants/apiKey.input'),
    id_or_code: {
      example: 'ACCT_4hl4xenwpjy5wb',
      description: 'The subaccount ID or code you want to fetch'
    }
  },

  exits: {

    success: {
      variableName: 'result',
      description: 'Done.'
    }

  },

  fn: function ({ apiKey, id_or_code }, exits) {
    makeRequest(`/subaccount/${id_or_code}`,
      {
        headers: getHeaders(apiKey || process.env.PAYSTACK_API_KEY)
      }).then((subaccount) => {
      return exits.success(subaccount)
    }).catch(error => {
      return exits.error(error)
    })
  }

}
