const { getHeaders } = require('../helpers/get-headers')
const { getQueryStringFromObject } = require('../helpers/get-query-string-from-object')
const { makeRequest } = require('../helpers/make-request')
const _ = require('@sailshq/lodash')
module.exports = {

  friendlyName: 'List Dedicated Accounts',

  description: 'List dedicated accounts available on your integration',

  cacheable: false,

  sync: false,

  inputs: {
    apiKey: require('../constants/apiKey.input'),
    active: {
      example: true,
      description: 'Status of the dedicated account'
    },
    currency: {
      example: 'NGN',
      description: 'Dedicated amount currency'
    },
    provider_slug: {
      example: 'wema-bank'
    },
    bank_id: {
      example: '035',
      description: "The bank's ID e.g. 035"
    },
    customer: {
      example: '1530104',
      description: "The customer's ID"
    }
  },

  exits: {

    success: {
      variableName: 'result',
      description: 'Done.'
    }

  },

  fn: function ({ apiKey, params }, exits) {
    const queryParams = _.isEmpty(params) ? null : getQueryStringFromObject(params)
    const endpoint = _.isNull(queryParams) ? '/dedicated_account' : `/dedicated_account?${queryParams}`
    makeRequest(endpoint,
      {
        headers: getHeaders(apiKey || process.env.PAYSTACK_API_KEY)
      }).then((dedicatedAccount) => {
      return exits.success(dedicatedAccount)
    }).catch(error => {
      return exits.error(error)
    })
  }

}
