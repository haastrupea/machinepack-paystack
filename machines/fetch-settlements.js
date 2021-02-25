const { getHeaders } = require('../helpers/get-headers')
const { getQueryStringFromObject } = require('../helpers/get-query-string-from-object')
const { makeRequest } = require('../helpers/make-request')
const _ = require('@sailshq/lodash')
module.exports = {

  friendlyName: 'Fetch Settlements',

  description: 'Fetch settlements made to your settlement accounts.',

  cacheable: false,

  sync: false,

  inputs: {
    apiKey: require('../constants/apiKey.input'),
    perPage: require('../constants/perPage.input'),
    page: require('../constants/page.input'),
    subaccount: {
      example: 'ACCT_83uhio98ueej',
      description: 'Provide a subaccount ID to export only settlements for that subaccount. Set to none to export only transactions for the account.'
    },
    from: {
      example: '2016-09-24T00:00:05.000Z',
      description: 'A timestamp from which to start listing settlements e.g. 2016-09-24T00:00:05.000Z, 2016-09-21'
    },
    to: {
      example: '2016-09-24T00:00:05.000Z',
      description: 'A timestamp at which to stop listing settlements e.g. 2016-09-24T00:00:05.000Z, 2016-09-21'
    }
  },

  exits: {

    success: {
      variableName: 'result',
      description: 'Done.'
    }

  },

  fn: function ({ apiKey, ...params }, exits) {
    const definedParams = _.isEmpty(params) ? {} : _.pick(params, _.identity)
    const queryParams = _.isEmpty(definedParams) ? null : getQueryStringFromObject(definedParams)
    const endpoint = _.isNull(queryParams) ? '/settlement' : `/settlement?${queryParams}`

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
