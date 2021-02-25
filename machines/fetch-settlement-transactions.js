const { getHeaders } = require('../helpers/get-headers')
const { getQueryStringFromObject } = require('../helpers/get-query-string-from-object')
const { makeRequest } = require('../helpers/make-request')
const _ = require('@sailshq/lodash')
module.exports = {

  friendlyName: 'Fetch Settlement Transactions',

  description: 'Get the transactions that make up a particular settlement',

  cacheable: false,

  sync: false,

  inputs: {
    apiKey: require('../constants/apiKey.input'),
    perPage: require('../constants/perPage.input'),
    page: require('../constants/page.input'),
    id: {
      example: '480955498',
      required: true,
      description: 'Provide a subaccount ID to export only settlements for that subaccount. Set to none to export only transactions for the account.'
    },
    from: {
      example: '2016-09-24T00:00:05.000Z',
      description: 'A timestamp from which to start listing settlements transactions e.g. 2016-09-24T00:00:05.000Z, 2016-09-21'
    },
    to: {
      example: '2016-09-24T00:00:05.000Z',
      description: 'A timestamp at which to stop listing settlements transactions e.g. 2016-09-24T00:00:05.000Z, 2016-09-21'
    }
  },

  exits: {

    success: {
      variableName: 'result',
      description: 'Done.'
    }

  },

  fn: function ({ apiKey, id, ...params }, exits) {
    const definedParams = _.isEmpty(params) ? {} : _.pick(params, _.identity)
    const queryParams = _.isEmpty(definedParams) ? null : getQueryStringFromObject(definedParams)
    const endpoint = _.isNull(queryParams) ? `/settlement/${id}/transactions` : `/settlement/${id}/transactions?${queryParams}`

    makeRequest(endpoint,
      {
        headers: getHeaders(apiKey || process.env.PAYSTACK_API_KEY)
      }).then((retrievedsubaccount) => {
      return exits.success(retrievedsubaccount)
    }).catch(error => {
      return exits.error(error)
    })
  }

}
